import {
  FAILURE_SEARCH_MOVIE,
  REQUEST_SEARCH_MOVIE,
  SUCCESS_SEARCH_MOVIE
} from './constants'
import { MoviesResponse } from '../../types'

// actions
export interface RequestSearchMovie {
  type: typeof REQUEST_SEARCH_MOVIE
  query: string
}

export interface SuccessSearchMovie {
  type: typeof SUCCESS_SEARCH_MOVIE
  data: MoviesResponse
}

export interface FailureSearchMovie {
  type: typeof FAILURE_SEARCH_MOVIE
  error: object
}

// action creators
export const requestSearchMovie = (query: string): RequestSearchMovie => ({
  type: REQUEST_SEARCH_MOVIE,
  query
})

export const successSearchMovie = (data: MoviesResponse): SuccessSearchMovie => ({
  type: SUCCESS_SEARCH_MOVIE,
  data
})

export const failureSearchMovie = (error: object): FailureSearchMovie => ({
  type: FAILURE_SEARCH_MOVIE,
  error
})

export type SearchActionTypes =
  | RequestSearchMovie
  | SuccessSearchMovie
  | FailureSearchMovie
