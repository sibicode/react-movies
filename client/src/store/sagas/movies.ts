import { call, put, takeLatest } from 'redux-saga/effects'
import { REQUEST_MOVIE_LIST } from '../actions/constants'
import {
  RequestMovieList,
  successMovieList,
  failureMovieList
} from '../actions'
import { requestMovies } from '../../services/movies'

function* getMovies ({ url }: RequestMovieList) {
  try {
    const response = yield call(requestMovies, url)
    yield put(successMovieList(response))
  } catch (error) {
    yield put(failureMovieList(error))
  }
}

export function* watchRequestMovie () {
  yield takeLatest(REQUEST_MOVIE_LIST, getMovies)
}
