import React from 'react';
import './App.css';
import BoxContainer from './components/box-container/box.container.component';
import { useDispatch } from 'react-redux';
import { restartGame } from './redux/tic-tac/actions';
import PlayerScore from './components/player-score/player.score.component';

function App() {
  const dispatch = useDispatch();

  return (
    <div className='parent'>
        <div className='heading'>
          <h1>TIC - TAC - TOE</h1>
        </div>
        <div className='board'>
          <PlayerScore player={1} score={2}/>
          <div>
            <BoxContainer />
          </div>
          <PlayerScore player={2} score={0}/>
        </div>
        <div className='reset-button'>
            <button onClick={() => dispatch(restartGame())}>Restart</button>
        </div>
    </div>
  );
}

export default App;
