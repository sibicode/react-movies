import { call, put, takeLatest } from 'redux-saga/effects'
import { REQUEST_MOVIE_DETAILS } from '../actions/constants'
import {
  RequestMovieDetails,
  successMovieDetails,
  failureMovieDetails
} from '../actions'
import { requestDetails } from '../../services/movies'

function* getMovies ({ id }: RequestMovieDetails) {
  try {
    const response = yield call(requestDetails, id)
    yield put(successMovieDetails(response))
  } catch (error) {
    yield put(failureMovieDetails(error))
  }
}

export function* watchRequestDetails () {
  yield takeLatest(REQUEST_MOVIE_DETAILS, getMovies)
}
