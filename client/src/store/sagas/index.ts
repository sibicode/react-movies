import { all } from 'redux-saga/effects'
import { watchRequestMovie } from './movies'
import { watchRequestDetails } from './details'
import { watchRequestSearch } from './search'

export default function* rootSaga () {
  yield all([
    watchRequestMovie(),
    watchRequestDetails(),
    watchRequestSearch()
  ])
}
