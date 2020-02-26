import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import Loader from '../../components/Loader'
import { requestMovieDetails } from '../../store/actions'
import { getMovieDetails } from '../../store/selectors'
import * as S from './Movie.styled'

type MatchParams = {
  id: string
}

const Details: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const dispatch = useDispatch()

  const { movie, isLoading } = useSelector(getMovieDetails)

  useEffect(() => {
    dispatch(requestMovieDetails(match.params.id))
  }, [match.params.id])

  if (isLoading) {
    return <Loader/>
  }

  return (
    <S.Wrapper src={`http://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}>
      <S.Preview>
        <img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
      </S.Preview>
      <S.Info>
        <S.Title>{movie.title}</S.Title>
        <S.Tagline>{movie.tagline}</S.Tagline>
        <S.Genres>
          {movie.genres.map(genre => genre.name).join(' / ')}
        </S.Genres>
        <S.Date>
          {movie.release_date.slice(0, 4)}
        </S.Date>
        <S.Overview>{movie.overview}</S.Overview>
      </S.Info>
    </S.Wrapper>
  )
}

export default Details
