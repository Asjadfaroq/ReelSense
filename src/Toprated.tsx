import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react';
import MovieCard from './components/MovieCard';
import axiosInstance from './axiosinstance/Axiosinstance';

const Toprated = () => {
  const [page, setPage] = useState(1);
  const totalPages = 103; // Example: Setting total pages to 10 for now. Adjust according to the API data if it provides total pages.

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      document.getElementById('top-rated-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      document.getElementById('top-rated-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  let token = localStorage.getItem("token");

  if (token) {
    try {
      const decodedToken = jwtDecode<{ exp?: number }>(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp && decodedToken.exp < currentTime) {
        console.warn("Token expired, will attempt refresh via Axios interceptor");
      }
    } catch (error) {
      console.error("Invalid token format", error);
      localStorage.removeItem("token");
    }
  }

  const FetchTopRated = async () => {
    const data = await axiosInstance.get(`/api/top-detail?page=${page}`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    return data;
  };

  const { data, error, isLoading } = useQuery<any, Error>({
    queryKey: ['toprated', page],
    queryFn: FetchTopRated,
  });

  if (isLoading) {
    return (
      <div className="py-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_70px_rgba(249,115,22,0.10)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-500/10 rounded-xl border border-orange-400/20">
              <Trophy className="w-6 h-6 text-orange-300" />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
              Top Rated TV Shows
            </h2>
          </div>
          <div className="py-10 flex flex-col items-center justify-center text-slate-400">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="animate-pulse">Loading top rated masterpieces...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8">
        <div className="rounded-3xl border border-red-400/20 bg-red-500/10 backdrop-blur-xl p-6 mx-2">
          <p className="text-red-200 font-medium">Error loading Top Rated TV Shows: {error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <section id="top-rated-section" className="py-8">
      <div className="mx-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_90px_rgba(249,115,22,0.10)]">
        <div className="flex items-start justify-between gap-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-500/10 rounded-2xl border border-orange-400/20">
              <Trophy className="w-6 h-6 text-orange-300" />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
                Top Rated TV Shows
              </h2>
              <p className="mt-1 text-sm text-slate-300/90">
                Curated picks with high ratings. Page <span className="font-semibold text-orange-300">{page}</span>.
              </p>
            </div>
          </div>

          {/* Pagination (header) */}
          <div className="hidden sm:flex items-center gap-3 bg-slate-900/60 border border-slate-800 rounded-2xl p-1">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="p-2 rounded-xl hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-slate-300"
              aria-label="Previous page"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-400/20 text-orange-200 font-semibold text-sm">
              {page} / {totalPages}
            </div>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className="p-2 rounded-xl hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-slate-300"
              aria-label="Next page"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-2 sm:px-4"
        >
          {data && data.data.results.map((movie: any, index: number) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <MovieCard
                movie={movie}
                linkPath={"/top-detail"}
                state={{ movie }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination (mobile/extra) */}
        <div className="sm:hidden flex justify-center mt-8">
          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-1">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="p-2 rounded-xl hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-slate-300"
              aria-label="Previous page"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-400/20 text-orange-200 font-semibold text-sm">
              {page}
            </div>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className="p-2 rounded-xl hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-slate-300"
              aria-label="Next page"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toprated;
