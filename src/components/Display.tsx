import React, { FC } from 'react'
import styled from 'styled-components'

interface DisplayProps {
  gameOver?: boolean
  text: string
}

interface Styles {
  isGameOver: boolean | undefined
}

const Display: FC<DisplayProps> = ({ gameOver, text }) => (
  <StyledDisplay className='display' isGameOver={gameOver}>
    {text}
  </StyledDisplay>
)

const StyledDisplay = styled.div<Styles>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 10px;
  color: ${props => props.isGameOver ? 'red' : '#999'};
  background: #000;
`

export default Display