import React from 'react';
import Board from './components/Board';
import StyledHeading from './components/StyledHeading';



function App() {
  return (
    <div >
      <StyledHeading>Minesweeper</StyledHeading>
      <Board />
      
    </div>
  );
}

export default App;
