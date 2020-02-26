import React from 'react'
import SearchBar from '../SearchBar'
import * as S from './Header.styled'

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }) => (
  <S.Header>
    <S.H1>{title}</S.H1>
    <SearchBar/>
  </S.Header>
)

export default Header
