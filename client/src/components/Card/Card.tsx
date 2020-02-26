import React from 'react'
import { MovieProps } from '../../types'
import * as S from './Card.styled'

const Card: React.FC<MovieProps> = ({ movie: { id, title, vote_average, release_date, poster_path } }) => {
  return (
    <S.CardStyled to={`/movies/${id}`}>
      <S.Preview>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
          alt={title}
        />
        <S.Rating>{vote_average}</S.Rating>
      </S.Preview>
      <S.Title>{title}</S.Title>
      <S.ReleaseDate>{release_date}</S.ReleaseDate>
    </S.CardStyled>
  )
}

export default Card
