import React from 'react'
import styled from 'styled-components'
import Stage from './Stage'
import Display from './Display'
import StartBtn from './StartBtn'



const Tetris = () => {

  return (
    <StyledTetris>
      {/* <Stage /> */}
      <aside>
        <Display text='Score' />
        <Display text='Rows' />
        <Display text='Level' />
        <StartBtn callback={() => console.log('clicked')} />
      </aside>
    </StyledTetris>
  )
}

const StyledTetris = styled.div`

`

export default Tetris