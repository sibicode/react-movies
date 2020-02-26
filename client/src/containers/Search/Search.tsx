import React, { Fragment, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import CardList from '../../components/CardList'
import { requestSearchMovie } from '../../store/actions'
import { getSearchResult } from '../../store/selectors'
import { RootState } from '../../types'
import { PageWrapper } from '../Page/MainPage.styled'
import { SearchForm, SearchInput } from './Search.styled'

const Search: React.FC<RouteComponentProps> = ({ history, location }) => {
  const searchParams = new URLSearchParams(location.search)
  const searchParam = searchParams.get('s') || ''
  const [searchValue, setSearchValue] = useState<string>(searchParam)
  const movies = useSelector(getSearchResult)
  const isLoading = useSelector((state: RootState) => state.search.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    if (searchParam) {
      dispatch(requestSearchMovie(searchValue))
    }
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    setSearchValue(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(requestSearchMovie(searchValue))
    searchParams.set('s', searchValue)
    history.replace({ search: `?${searchParams.toString()}` })
  }

  const noResults = 'There are no movies that matched your query.'

  return (
    <Fragment>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          onChange={handleChange}
          type="text"
          value={searchValue}
          placeholder="Search movies"
        />
      </SearchForm>
      <PageWrapper>
        {isLoading ?
          <Loader/> :
          movies && movies.length ?
            <CardList movies={movies}/> :
            noResults
        }
      </PageWrapper>
    </Fragment>
  )
}

export default Search
