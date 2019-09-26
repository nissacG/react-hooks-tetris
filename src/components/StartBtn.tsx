import React, { FC } from 'react'
import styled from 'styled-components'

interface StartBtnProps {
  callback: () => void
}

const StartBtn: FC<StartBtnProps> = ({ callback }) => (
  <StyledStartBtn onClick={callback}>
    StartBtn
  </StyledStartBtn>
)

const StyledStartBtn = styled.div`

`

export default StartBtn