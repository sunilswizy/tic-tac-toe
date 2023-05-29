import React from 'react';
import './App.css';
import BoxContainer from './components/box-container/box.container.component';
import { useDispatch, useSelector } from 'react-redux';
import { restartGame } from './redux/tic-tac/actions';
import PlayerScore from './components/player-score/player.score.component';
import { RootState } from './redux/root-reducer';

function App() {
  const dispatch = useDispatch();
  const { playerOneWinCount, playerTwoWinCount } = useSelector((state: RootState) => state.tic)

  return (
    <div className='parent'>
        <div className='heading'>
          <h1>TIC - TAC - TOE</h1>
        </div>
        <div className='board'>
          <div>
            <BoxContainer />
          </div>
        </div>
        <div className='reset-button'>
          <PlayerScore player='X' score={playerOneWinCount}/>
          <PlayerScore player={0} score={playerOneWinCount}/>
          <PlayerScore player='O' score={playerTwoWinCount}/>
        </div>
    </div>
  );
}

export default App;
