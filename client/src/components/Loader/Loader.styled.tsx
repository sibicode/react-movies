import styled from 'styled-components'

export const LoaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 3;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75px;
    height: auto;
  }
`
