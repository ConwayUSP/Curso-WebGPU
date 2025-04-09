import React from 'react';
import './App.css';
import { GameView } from './components/GameView';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
      <GameView />  
    </div>
  );
}

export default App;
