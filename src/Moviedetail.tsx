import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, Calendar, Clock, Play, Star, Tag } from 'lucide-react';
import Navbar from './components/Navbar';
import axiosInstance from './axiosinstance/Axiosinstance';

const fetchMovieById = async (id: string) => {
  const response = await axiosInstance.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=2548a82cdbcc3c2703fceec99fee278e`
  );
  return response.data;
};

const Moviedetail = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => fetchMovieById(id as string),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const year = useMemo(() => {
    const d = data?.release_date;
    return d ? d.split('-')[0] : null;
  }, [data]);

  const runtimeText = useMemo(() => {
    if (!data?.runtime) return null;
    const h = Math.floor(data.runtime / 60);
    const m = data.runtime % 60;
    return `${h}h ${m}m`;
  }, [data]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-950 text-slate-400 flex items-center justify-center">
        <div className="text-center">
          <div className="w-14 h-14 border-4 border-orange-500/50 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="animate-pulse">Loading details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-neutral-950 text-red-300 flex items-center justify-center p-6">
        <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-5 max-w-xl w-full text-center">
          <p className="font-medium">Error loading movie details</p>
          <p className="text-sm opacity-80 mt-2">{(error as any)?.message || 'Unknown error'}</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-orange-500/15 border border-orange-400/20 px-4 py-2 text-orange-200 hover:bg-orange-500/20 transition-colors"
          >
            <ArrowLeft size={18} />
            Go back
          </button>
        </div>
      </div>
    );
  }

  const title = data?.title ?? 'Untitled';
  const posterUrl = data?.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
  const backdropUrl = data?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
    : null;

  return (
    <div className="min-h-screen bg-neutral-950 text-slate-100 font-sans">
      <Navbar />

      <div className="relative pt-24 pb-14">
        {backdropUrl && (
          <div className="absolute inset-0 -z-10">
            <img
              src={backdropUrl}
              alt={`${title} backdrop`}
              className="w-full h-full object-cover opacity-30 blur-xl scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/70 to-neutral-950" />
          </div>
        )}

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          </div>

          <div className="grid lg:grid-cols-[360px_1fr] gap-10 items-start">
            {/* Poster + primary actions */}
            <div className="space-y-5">
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                <div className="aspect-[2/3]">
                  <img
                    src={posterUrl}
                    alt={`${title} poster`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-orange-400/20 bg-orange-500/10 text-orange-200 text-sm">
                  <Star size={16} className="fill-current" />
                  {data?.vote_average ? data.vote_average.toFixed(1) : '—'}
                </span>
                {year && (
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 text-slate-200 text-sm">
                    <Calendar size={16} />
                    {year}
                  </span>
                )}
                {runtimeText && (
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 text-slate-200 text-sm">
                    <Clock size={16} />
                    {runtimeText}
                  </span>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-400 to-amber-300 text-slate-950 py-3 font-semibold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all"
                  onClick={() => {
                    // Placeholder action (no backend action in this repo).
                    // Keeping UX responsive without extra network calls.
                  }}
                >
                  <Play size={18} />
                  Watch
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 hover:bg-white/10 transition-colors"
                >
                  + List
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-200 bg-clip-text text-transparent">
                    {title}
                  </span>
                </h1>
                {data?.tagline && (
                  <p className="mt-3 text-lg text-slate-300/90 italic">
                    “{data.tagline}”
                  </p>
                )}
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg">
                <h2 className="flex items-center gap-2 text-xl font-semibold">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-400/20">
                    <Tag size={18} className="text-orange-300" />
                  </span>
                  Overview
                </h2>
                <p className="mt-3 text-slate-300 leading-relaxed text-lg">
                  {data?.overview}
                </p>
              </div>

              {data?.genres?.length > 0 && (
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg">
                  <h2 className="text-xl font-semibold">Genres</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {data.genres.map((genre: any) => (
                      <span
                        key={genre.id}
                        className="px-3 py-2 rounded-full border border-orange-400/20 bg-orange-500/10 text-orange-200 text-sm hover:bg-orange-500/15 transition-colors"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moviedetail;
