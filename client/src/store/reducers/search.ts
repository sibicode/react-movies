import {
  FAILURE_SEARCH_MOVIE,
  REQUEST_SEARCH_MOVIE,
  SUCCESS_SEARCH_MOVIE
} from '../actions/constants'
import { SearchActionTypes } from '../actions'
import { Movie } from '../../types'

export type SearchState = {
  results: Array<Movie>
  searchValue: string
  isLoading: boolean
  error: null | object
}

const initialState: SearchState = {
  results: [],
  searchValue: '',
  isLoading: false,
  error: null
}

export const search = (
  state = initialState,
  action: SearchActionTypes
): SearchState => {
  switch (action.type) {
    case REQUEST_SEARCH_MOVIE:
      return {
        ...state,
        isLoading: true
      }
    case SUCCESS_SEARCH_MOVIE:
      return {
        ...state,
        results: action.data.results,
        isLoading: false
      }
    case FAILURE_SEARCH_MOVIE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    default:
      return state
  }
}
