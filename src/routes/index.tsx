import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';
import type { Movie } from '~/types';

export const useMoviesLoader = routeLoader$(async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=2dca580c2a14b55200e784d157207b4d&language=en-US&page=1'
  );
  const data = await response.json();
  return data.results as Movie[];
});

export default component$(() => {
  const movies = useMoviesLoader();

  return (
    <>
      <section class="hero">
        <h1>Movie Explorer</h1>
        <p>
          Discover and explore a curated collection of films. Find detailed
          information about your favorite movies and uncover new cinematic gems.
        </p>
      </section>

      <div class="container">
        <h2 class="section-title">Popular Movies</h2>
        <div class="movies-grid">
          {movies.value.map((movie) => (
            <a key={movie.id} href={`/movie/${movie.id}`} class="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
              />
              <div class="movie-info">
                <h2>{movie.title}</h2>
                <span class="rating">⭐ {movie.vote_average.toFixed(1)}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Movie Explorer',
  meta: [
    {
      name: 'description',
      content:
        'Explore popular movies and discover detailed information about films',
    },
  ],
};
