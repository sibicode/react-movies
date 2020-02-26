import React from 'react'
import Card from '../Card'
import * as S from './Card.styled'
import { Movie } from '../../types'

interface Props {
  movies: Array<Movie>
}

const CardList: React.FC<Props> = ({ movies }) => {
  return (
    <S.CardList>
      {movies.map(movie => <Card key={movie.id} movie={movie}/>)}
    </S.CardList>
  )
}

export default CardList
