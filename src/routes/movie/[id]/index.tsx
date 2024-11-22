import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';

export const useMovieLoader = routeLoader$(async ({ params }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=2dca580c2a14b55200e784d157207b4d&language=en-US`
  );
  const data = await response.json();
  return data;
});

export default component$(() => {
  const movie = useMovieLoader();

  return (
    <div class="container">
      <div class="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.value.poster_path}`}
          alt={movie.value.title}
          class="movie-poster"
        />
        <div class="movie-info">
          <h1>{movie.value.title}</h1>
          <p class="tagline">{movie.value.tagline}</p>
          <p class="overview">{movie.value.overview}</p>
          <div class="metadata">
            <p>Release Date: {movie.value.release_date}</p>
            <p>Rating: {movie.value.vote_average.toFixed(1)} / 10</p>
            <p>Runtime: {movie.value.runtime} minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Movie Details',
};