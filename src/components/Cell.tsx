import React, { FC } from 'react'

interface CellProps {
  type: number
}

const Cell: FC<CellProps> = ({ type }) => (
  <div>
    {type}
  </div>
)
export default Cell