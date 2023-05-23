import React from 'react';
import './App.css';
import BoxContainer from './components/box-container/box.container.component';
import { useDispatch } from 'react-redux';
import { restartGame } from './redux/tic-tac/actions';

function App() {
  const dispatch = useDispatch();

  return (
    <div className='parent'>
      <div className='heading'>
        <h1>TIC - TAC - TOE</h1>
      </div>
        <div className='board'>
            <BoxContainer />
        </div>
        <div className='reset-button'>
            <button onClick={() => dispatch(restartGame())}>Restart</button>
        </div>
    </div>
  );
}

export default App;
