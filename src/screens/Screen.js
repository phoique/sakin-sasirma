import React, {Component, useState} from 'react';
import Home from './Home';
import Game from './Game';
import EndGame from './EndGame';

export default Screen = () => {

  const [navigation, setNavigation] = useState('home');
  
  switch (navigation) {
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