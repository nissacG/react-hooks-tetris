import React, { FC } from 'react'
import styled from 'styled-components'

interface StartBtnProps {
  callback: () => void
}

const StartBtn: FC<StartBtnProps> = ({ callback }) => (
  <StyledStartBtn className='start-btn' onClick={callback}>
    StartBtn
  </StyledStartBtn>
)

const StyledStartBtn = styled.div`

`

export default StartBtn