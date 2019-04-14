import React, { useContext } from 'react';
import Home from './Home';
import Game from './Game';
import EndGame from './EndGame';
import { Context } from '../store/Store';

const Screen = () => {

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

export default Screen;