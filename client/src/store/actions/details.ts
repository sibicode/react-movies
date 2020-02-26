import {
  FAILURE_MOVIE_DETAILS,
  REQUEST_MOVIE_DETAILS,
  SUCCESS_MOVIE_DETAILS
} from './constants'
import { Movie } from '../../types'

// actions
export interface RequestMovieDetails {
  type: typeof REQUEST_MOVIE_DETAILS
  id: string
}

export interface SuccessMovieDetails {
  type: typeof SUCCESS_MOVIE_DETAILS
  data: Movie
}

export interface FailureMovieDetails {
  type: typeof FAILURE_MOVIE_DETAILS
  error: object
}

// action creators
export const requestMovieDetails = (id: string): RequestMovieDetails => ({
  type: REQUEST_MOVIE_DETAILS,
  id
})

export const successMovieDetails = (data: Movie): SuccessMovieDetails => ({
  type: SUCCESS_MOVIE_DETAILS,
  data
})

export const failureMovieDetails = (error: object): FailureMovieDetails => ({
  type: FAILURE_MOVIE_DETAILS,
  error
})

// action types
export type GetMovieDetailsActionTypes =
  | RequestMovieDetails
  | SuccessMovieDetails
  | FailureMovieDetails
