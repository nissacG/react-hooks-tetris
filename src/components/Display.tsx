import React, { FC } from 'react'
import styled from 'styled-components'

interface DisplayProps {
  gameOver?: string
  text: string
}

const Display: FC<DisplayProps> = ({ gameOver, text }) => (
  <StyledDisplay>
    Display
  </StyledDisplay>
)

const StyledDisplay = styled.div`

`

export default Display