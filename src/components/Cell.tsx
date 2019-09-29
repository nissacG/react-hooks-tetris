import React, { FC } from 'react'
import styled from 'styled-components'
import { tetrominos } from '../tetrominos'

interface CellProps {
  type: string | number
}

interface Styled {
  type: string | number
  color: string
}

const Cell: FC<CellProps> = ({ type }) => (
  <StyledCell type={'L'} color={tetrominos['L'].color} />
)



const StyledCell = styled.div<Styled>`
  width: auto;
  background: rgba(${props => props.color}, 0.8);
  border: ${props => (props.type === 0 ? '0px' : '4px solid')};
  border-bottom-color: rgba(${props => props.color}, 0.1);
  border-right-color: rgba(${props => props.color}, 1);
  border-left-color: rgba(${props => props.color}, 1); 
  border-top-color: rgba(${props => props.color}, 0.3);
`
export default Cell