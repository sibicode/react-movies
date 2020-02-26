export interface Movie {
  id: number
  title: string
  poster_path: string
  vote_average: string
  release_date: string
  backdrop_path: string
  overview: string
  genres: Array<{ name: string }>
  vote_count: string
  tagline: string
}

export interface MoviesResponse {
  results: Array<Movie>
  total_pages: number
  total_results: number
  page: number
}

export interface MovieProps {
  movie: Movie
}
