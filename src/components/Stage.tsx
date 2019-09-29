import React, { FC } from 'react'
import styled from 'styled-components'
import Cell from './Cell'

interface StageProps {
  stage: [string, number][][]
}

const Stage: FC<StageProps> = ({ stage }) => (
  <StyledStage>
    {
      stage.map((row: any[]) => (
        row.map((cell: any[], index: number ) => (
          <Cell key={index} type={cell[0]} />
        ))
      ))
    }
  </StyledStage>
)

const StyledStage = styled.div`

`

export default Stage