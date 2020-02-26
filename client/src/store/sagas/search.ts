import { call, put, takeLatest } from 'redux-saga/effects'
import { REQUEST_SEARCH_MOVIE } from '../actions/constants'
import {
  RequestSearchMovie,
  successSearchMovie,
  failureSearchMovie
} from '../actions'
import { requestSearch } from '../../services/movies'

function* getMovies ({ query }: RequestSearchMovie) {
  try {
    const response = yield call(requestSearch, query)
    yield put(successSearchMovie(response))
  } catch (error) {
    yield put(failureSearchMovie(error))
  }
}

export function* watchRequestSearch () {
  yield takeLatest(REQUEST_SEARCH_MOVIE, getMovies)
}
