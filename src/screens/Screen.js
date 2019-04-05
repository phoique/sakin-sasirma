import React, {Component} from 'react';
import Home from './Home';
import Game from './Game';
import EndGame from './EndGame';

export default class Screen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      navigation: 'home'
    };

  }

  render() {
    console.log(this.state)
    switch (this.state.navigation) {
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
}