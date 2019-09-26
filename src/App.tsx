import React from 'react';
import styled from 'styled-components'
import Tetris from './components/Tetris'

const App: React.FC = () => (
  <StyledApp className='App'>
    <Tetris />
  </StyledApp>
)

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
`

export default App;
