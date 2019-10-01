import React, { useState } from 'react'
import styled from 'styled-components'
import Stage from './Stage'
import Display from './Display'
import StartBtn from './StartBtn'

import bgImage from '../img/retro-bg.jpg'

import { createStage } from '../gameHelpers'

import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'

const Tetris = () => {

  const [gameOver, setGameOver] = useState(false)
  const [dropTime, setDropTime] = useState(null)

  const [player] = usePlayer()

  // const [stage, setStage] = useStage(player)
  const [stage, setStage] = useStage()

  const movePlayer = (direction: string) => {

  }
  
  const startGame = () => {

  }
  
  const drop = () => {

  }
  
  const dropPlayer = () => {

  }
  
  const move = (e: any) => { // amend typing to allow for destructuring
    console.log(e)
    console.log(e.keyCode)
  }

  return (
    <StyledTetris className='tetris-wrapper' role='button' tabIndex={0} onKeyDown={e => move(e)} >
      <div className='tetris'>
        <Stage stage={stage}/> 
        <aside>
          {
            gameOver && <Display text='Game Over' gameOver />
          }
          <Display text='Score' />
          <Display text='Rows' />
          <Display text='Level' />
          <StartBtn callback={() => console.log('clicked')} />
        </aside>
      </div>
    </StyledTetris>
  )
}

const StyledTetris = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  font-family: 'Arcade Classic';
  overflow: hidden;

  & .tetris {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 900px;

    & aside {
      width: 100%;
      max-width: 200px;
      display: block;
      padding: 0 20px;
    }
  }
`

export default Tetris