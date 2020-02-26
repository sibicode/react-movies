import {
  REQUEST_MOVIE_LIST,
  SUCCESS_MOVIE_LIST,
  FAILURE_MOVIE_LIST
} from '../actions/constants'
import { GetMovieActionTypes } from '../actions'
import { Movie } from '../../types'

export type State = {
  isLoading: boolean
  currentPage: number
  totalPages: number
  results: Array<Movie>
  error: boolean
}

export const initialState = {
  isLoading: true,
  results: [],
  currentPage: 1,
  totalPages: 1,
  error: false
}

export const movies = (
  state: State = initialState,
  action: GetMovieActionTypes
): State => {
  switch (action.type) {
    case REQUEST_MOVIE_LIST:
      return {
        ...state,
        isLoading: true
      }
    case SUCCESS_MOVIE_LIST:
      return {
        ...initialState,
        currentPage: action.data.page,
        totalPages: action.data.total_pages,
        results: action.data.results,
        isLoading: false
      }
    case FAILURE_MOVIE_LIST:
      return {
        ...state,
        error: true,
        isLoading: false
      }

    default:
      return state
  }
}
