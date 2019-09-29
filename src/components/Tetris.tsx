import React from 'react'
import styled from 'styled-components'
import Stage from './Stage'
import Display from './Display'
import StartBtn from './StartBtn'

import { createStage } from '../gameHelper'
import bgImage from '../img/retro-bg.jpg'

const Tetris = () => {

  return (
    <StyledTetris className='tetris-wrapper'>
      <div className='tetris'>
        <Stage stage={createStage()}/>
        <aside>
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
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 40px;
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