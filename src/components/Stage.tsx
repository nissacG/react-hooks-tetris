import React, { FC, SetStateAction, Dispatch } from 'react'
import styled from 'styled-components'
import Cell from './Cell'

export type Stage = [string, number][][] | Dispatch<SetStateAction<any[][]>>

interface StageProps {
  // stage: Stage // @@TODO: look into fixing typing with hooks and mapping on array type
  stage: any // @@TODO: look into fixing typing with hooks
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
    calc(30vw / ${props => props.width})
  );
  grid-template-columns: repeat(
    ${props => props.width},
    1fr
  );
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 30vw;
  background: #111;
`

export default Stage