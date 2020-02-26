import { Movie, MoviesResponse } from '../types'

export const requestMovies = (url: string, page: number = 1): Promise<MoviesResponse> => {
  return fetch(`/api/movies/${url}?page=${page}`)
    .then(response => response.json())
}

export const requestDetails = (id: string): Promise<Movie> => {
  return fetch(`/api/movies/${id}`)
    .then(response => response.json())
}

export const requestSearch = (query: string): Promise<MoviesResponse> => {
  return fetch(`/api/search?s=${query}`)
    .then(response => response.json())
}
