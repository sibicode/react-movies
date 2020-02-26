import styled from 'styled-components'

interface WrapperProps {
  src: string
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  display: flex;
  height: 100%;
  padding-top: 65px;
  padding-left: 84px;
  color: #fff;
  overflow: hidden;
  
  ::before {
    content: '';
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;  
    background-image: url(${props => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    opacity: 0.1;
  }
`

export const Preview = styled.div`
  width: 300px;
  margin-right: 40px;
  z-index: 1;
`

export const Info = styled.div`  
  z-index: 1;
`

export const Title = styled.h1`
  margin: 0 0 25px;
`

export const Tagline = styled.p`
  margin: 0 0 15px;
`

export const Genres = styled(Tagline)`
`

export const Date = styled(Tagline)`
`

export const Overview = styled(Tagline)`
  max-width: 520px;
`


