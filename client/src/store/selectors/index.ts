import { RootState } from '../../types'

export const getMoviesList = (state: RootState) => state.movies.results
export const getMovieDetails = (state: RootState) => state.details
export const getSearchResult = (state: RootState) => state.search.results
