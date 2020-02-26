import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Navigation = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Item = styled.li`
  margin-bottom: 5px;
`

export const Link = styled(NavLink)`
  display: block;
  height: 45px;
  padding: 14px 45px;
  color: #909599;
  text-decoration: none;
  letter-spacing: 0.4px;
  line-height: 18px;
  border-left: 3px solid transparent;
  
  &:hover,
  &.active {
    color: #fff;
    background-color: #2C3C46;
    border-left: 3px solid #1C8D72;
  }
`
