import React, { useState, useEffect, useRef } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { SearchButton, SearchForm, SearchInput } from './SearchBar.styled'
import { ReactComponent as SearchIcon } from '../../assets/img/search.svg'

const SearchBar: React.FC<RouteComponentProps> = ({ history }) => {
  const searchInput = useRef<HTMLInputElement>(null)
  const [isOpened, setIsOpened] = useState(false)

  useEffect(() => {
    if (isOpened) {
      searchInput.current!.focus()
    } else {
      searchInput.current!.blur()
    }
  }, [isOpened])

  const handleToggleShow = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsOpened(!isOpened)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    history.push({
      pathname: '/search',
      search: `?s=${searchInput.current!.value}`
    })
  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        isOpened={isOpened}
        ref={searchInput}
        placeholder="Search movies"
      />
      <SearchButton type="button" onClick={handleToggleShow}>
        <SearchIcon/>
      </SearchButton>
    </SearchForm>
  )
}

export default SearchBar
