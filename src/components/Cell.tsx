import React, { FC } from 'react'

interface CellProps {
  type: string
}

const Cell: FC<CellProps> = ({ type }) => (
  <div>
    CEll - {type}
  </div>
)
export default Cell