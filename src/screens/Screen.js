import React, { useContext } from 'react';
import Home from './Home';
import Game from './Game';
import EndGame from './EndGame';
import { Context } from '../store/Store';

export default Screen = () => {

  const { state } = useContext(Context);
  
  switch (state.navigation) {
    case 'home':
      return <Home />;
    case 'game':
      return <Game />;
    case 'endgame': 
      return <EndGame />;
    default:
      <Home />
  }
}