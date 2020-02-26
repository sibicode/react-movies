import React from 'react'
import { Item, Link, Navigation } from './Nav.styled'

const Nav = () => {
  return (
    <Navigation>
      <Item>
        <Link exact to={'/discover'}>
          Discover
        </Link>
      </Item>
      <Item>
        <Link to={'/top'}>
          Top Rated
        </Link>
      </Item>
      <Item>
        <Link to={'/popular'}>
          Popular
        </Link>
      </Item>
      <Item>
        <Link to={'/upcoming'}>
          Upcoming
        </Link>
      </Item>
      <Item>
        <Link to={'/search'}>
          Search
        </Link>
      </Item>
    </Navigation>
  )
}

export default Nav
