import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Play, Star, Tag } from 'lucide-react';
import Navbar from './components/Navbar';
import { useMemo } from 'react';

const MovieDetail2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;

  const title = movie?.name || movie?.title || 'Untitled';
  const posterUrl = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';

  const backdropUrl = movie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  const year = useMemo(() => {
    const d = movie?.first_air_date || movie?.release_date;
    return d ? d.split('-')[0] : null;
  }, [movie]);

  if (!movie) {
    return (
      <div className="min-h-screen bg-neutral-950 text-slate-400 flex flex-col items-center justify-center p-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">
          <p className="font-medium">No movie data available</p>
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
            <div className="space-y-5">
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                <div className="aspect-[2/3]">
                  <img src={posterUrl} alt={`${title} poster`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-orange-400/20 bg-orange-500/10 text-orange-200 text-sm">
                  <Star size={16} className="fill-current" />
                  {movie?.vote_average ? movie.vote_average.toFixed(1) : '—'}
                </span>
                {year && (
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 text-slate-200 text-sm">
                    <Calendar size={16} />
                    {year}
                  </span>
                )}
                {movie?.runtime && (
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 text-slate-200 text-sm">
                    <Clock size={16} />
                    {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                  </span>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-400 to-amber-300 text-slate-950 py-3 font-semibold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all"
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

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-200 bg-clip-text text-transparent">
                    {title}
                  </span>
                </h1>
                {movie?.tagline && (
                  <p className="mt-3 text-lg text-slate-300/90 italic">“{movie.tagline}”</p>
                )}
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg">
                <h2 className="flex items-center gap-2 text-xl font-semibold">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-400/20">
                    <Tag size={18} className="text-orange-300" />
                  </span>
                  Overview
                </h2>
                <p className="mt-3 text-slate-300 leading-relaxed text-lg">{movie?.overview}</p>
              </div>

              {movie?.genres?.length > 0 && (
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg">
                  <h2 className="text-xl font-semibold">Genres</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {movie.genres.map((genre: any) => (
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

export default MovieDetail2;
