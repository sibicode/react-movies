import {
  REQUEST_MOVIE_DETAILS,
  FAILURE_MOVIE_DETAILS,
  SUCCESS_MOVIE_DETAILS
} from '../actions/constants'
import { GetMovieDetailsActionTypes } from '../actions'
import { Movie } from '../../types'

interface DetailsState {
  movie: Movie
  isLoading: boolean
}

const initialState: DetailsState = {
  movie: {} as Movie,
  isLoading: true
}

export const details = (
  state = initialState,
  action: GetMovieDetailsActionTypes
): DetailsState => {
  switch (action.type) {
    case REQUEST_MOVIE_DETAILS:
      return {
        ...state,
        isLoading: true
      }
    case FAILURE_MOVIE_DETAILS:
      return {
        ...initialState,
        isLoading: false
      }
    case SUCCESS_MOVIE_DETAILS:
      return {
        ...state,
        movie: action.data,
        isLoading: false
      }
    default:
      return state
  }
}
