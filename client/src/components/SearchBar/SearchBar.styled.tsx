import styled from 'styled-components'

interface InputProps {
  isOpened: boolean
}

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
`

export const SearchButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 0;
  outline: none;
  background: linear-gradient(180deg, #25A183 0%, #1A896E 100%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  
  svg {
    width: 17px;
    fill: #fff;
  }
`

export const SearchInput = styled.input<InputProps>`
  height: 45px;
  width: ${({ isOpened }) => isOpened ? '250px' : '0'};
  color: #fff;
  border: 0;
  border-bottom: 1px solid #fff;
  outline: none;
  background-color: transparent;
  transition: width 0.15s ease-out;
`
