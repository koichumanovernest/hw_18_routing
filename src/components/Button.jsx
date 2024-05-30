import React from 'react'
import styled from 'styled-components'

const Button = ({children, onClick}) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
  background-color: #622424;
  border: none;
  border-radius: 8px;
  margin: 10px;
  width: 200px;
  font-size: 20px;
  height: 50px;
`;