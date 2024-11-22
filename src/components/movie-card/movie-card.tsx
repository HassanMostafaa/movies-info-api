import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
  };
}

export const MovieCard = component$<MovieCardProps>(({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`} class="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        loading="lazy"
      />
      <div class="movie-info">
        <h2>{movie.title}</h2>
        <span class="rating">⭐ {movie.vote_average.toFixed(1)}</span>
      </div>
    </Link>
  );
});