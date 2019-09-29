import React, { FC } from 'react'
import styled from 'styled-components'
import Cell from './Cell'

interface StageProps {
  stage: [string, number][][]
}

interface Styles {
  height: number
  width: number
}

const Stage: FC<StageProps> = ({ stage }) => (
  <StyledStage className='stage' height={stage.length} width={stage[0].length} >
    {
      stage.map((row: any[]) => (
        row.map((cell: any[], index: number ) => (
          <Cell key={index} type={cell[0]} />
        ))
      ))
    }
  </StyledStage>
)

const StyledStage = styled.div<Styles>`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(
    ${props => props.width},
    1fr
  );
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;
`

export default Stage