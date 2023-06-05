import React from 'react';
import './App.css';
import BoxContainer from './components/box-container/box.container.component';
import {  useSelector } from 'react-redux';
import PlayerScore from './components/player-score/player.score.component';
import { RootState } from './redux/root-reducer';

function App() {
  const { playerOneWinCount, playerTwoWinCount, tieCount, isTie, isCompleted, nextMove} = useSelector((state: RootState) => state.tic)

  return (
    <div className='parent'>
        <div className='heading'>
          {
              isTie ? 
              (
                <h1>TIED!</h1>
              )
              :
              isCompleted ?
              (
                nextMove === 'O' ? (<h1>X WINS</h1>) : (<h1>O WINS</h1>)
              )
              :
              (<h1>TIC - TAC - TOE</h1>)
          }
        </div>
        <div className='board'>
          <div>
            <BoxContainer />
          </div>
        </div>
        <div className='reset-button'>
          <PlayerScore player='X' score={playerOneWinCount}/>
          <PlayerScore player={0} score={tieCount}/>
          <PlayerScore player='O' score={playerTwoWinCount}/>
        </div>
    </div>
  );
}

export default App;
