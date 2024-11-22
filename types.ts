export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export interface MovieDetails extends Movie {
  tagline: string;
  overview: string;
  release_date: string;
  runtime: number;
}