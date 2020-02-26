import { combineReducers } from 'redux'
import { details } from './details'
import { movies } from './movies'
import { search } from './search'

export const rootReducer = combineReducers({
  details: details,
  movies: movies,
  search: search
})
