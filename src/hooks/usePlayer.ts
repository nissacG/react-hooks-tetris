import { useState } from 'react'

import { randomTetromino } from '../tetrominos'

export const usePlayer = () => {
  // same as below (destructuring)
  // const playerState = useState()
  // const player = playerState[0]
  // const setPlayer = playerState[1]

  const [player, setPlayer] = useState({
    position: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false
  })

  return [player]

}