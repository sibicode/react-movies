import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardStyled = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  max-width: 250px;
  text-decoration: none;
  transition: transform 0.25s ease-in-out;
  
  :hover {
    transform: translateY(-15px) scale(1.01);
  }
`

export const Preview = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  margin-bottom: 20px;
  box-shadow: 0 8px 35px -10px rgba(0, 0, 0, 0.8);
  
  img {
    width: 100%;
    height: auto;
  }
`

export const Title = styled.span`
  font-size: 18px;
  color: #fff;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const ReleaseDate = styled.span`
  font-size: 16px;
  color: #92989D;
`
export const Rating = styled.span`
  position: absolute;
  right: -20px;
  bottom: 20px;  
  display: block;
  width: 45px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  font-weight: 600;
  color: #fff;
  border-radius: 50%;
  background: linear-gradient(180deg, #FE9200 0%, #CB7706 100%);
  box-shadow: 3px 4px 8px -1px rgba(0, 0, 0, 0.25);
`
