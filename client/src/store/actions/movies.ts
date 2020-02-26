import {
  FAILURE_MOVIE_LIST,
  REQUEST_MOVIE_LIST,
  SUCCESS_MOVIE_LIST
} from './constants'
import { MoviesResponse } from '../../types'

// actions
export interface RequestMovieList {
  type: typeof REQUEST_MOVIE_LIST
  url: string
}

export interface SuccessMovieList {
  type: typeof SUCCESS_MOVIE_LIST
  data: MoviesResponse
}

export interface FailureMovieList {
  type: typeof FAILURE_MOVIE_LIST
  error: object
}

// action creators
export const requestMovieList = (url: string): RequestMovieList => ({
  type: REQUEST_MOVIE_LIST,
  url
})

export const successMovieList = (data: MoviesResponse): SuccessMovieList => ({
  type: SUCCESS_MOVIE_LIST,
  data
})

export const failureMovieList = (error: object): FailureMovieList => ({
  type: FAILURE_MOVIE_LIST,
  error
})

// action types
export type GetMovieActionTypes = RequestMovieList
  | SuccessMovieList
  | FailureMovieList
