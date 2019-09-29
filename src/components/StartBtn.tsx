import React, { FC } from 'react'
import styled from 'styled-components'

interface StartBtnProps {
  callback: () => void
}

const StartBtn: FC<StartBtnProps> = ({ callback }) => (
  <StyledStartBtn className='start-btn' onClick={callback}>
    Start Game
  </StyledStartBtn>
)

const StyledStartBtn = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 10px;
  border: none;
  background: #333;
  color: #fff;
  font-size: 1.2rem;
  outline: none;
  cursor: pointer;
`

export default StartBtn