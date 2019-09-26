import React, { FC } from 'react'
import styled from 'styled-components'
import Cell from './Cell'

interface StageProps {
  stage: string[]
}

const Stage: FC<StageProps> = ({ stage }) => (
  <StyledStage>
    Stage
  </StyledStage>
)

const StyledStage = styled.div`

`

export default Stage