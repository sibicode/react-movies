import { createGlobalStyle } from 'styled-components'

const BrandonGrotesqueRegular = require('./assets/fonts/BrandonGrotesque/BrandonGrotesque-Regular.woff')

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'BrandonGrotesque';
    src: url(${BrandonGrotesqueRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
    
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    font-family: 'BrandonGrotesque', sans-serif
  }

  html,
  body {
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
`
