import React from 'react';
import './App.css';
import BoxContainer from './components/box-container/box.container.component';

function App() {
  return (
    <div className='parent'>
        <div className='board'>
            <BoxContainer />
        </div>
    </div>
  );
}

export default App;
