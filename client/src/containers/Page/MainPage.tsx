import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import Header from '../../components/Header'
import CardList from '../../components/CardList'
import Loader from '../../components/Loader'
import { RootState } from '../../types'
import { requestMovieList } from '../../store/actions'
import { getMoviesList } from '../../store/selectors'
import { PageWrapper } from './MainPage.styled'

type Props = {
  title: string
}

type StateProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

type HOCProps = StateProps & RouteComponentProps

const MainPage: React.FC<Props & HOCProps> = ({ title, fetchMovies, movies, isLoading, error, match }) => {
  const currentRout = match.path.slice(1)
  useEffect(() => {
    fetchMovies(currentRout)
  }, [match.path])

  if (error) {
    return <h1>error</h1>
  }

  return (
    <Fragment>
      <Header title={title}/>
      <PageWrapper>
        {isLoading ?
          <Loader/> :
          <CardList movies={movies}/>
        }
      </PageWrapper>
    </Fragment>
  )
}

const mapStateToProps = (state: RootState) => ({
  movies: getMoviesList(state),
  isLoading: state.movies.isLoading,
  error: state.movies.error
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchMovies: (url: string) => dispatch(requestMovieList(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
