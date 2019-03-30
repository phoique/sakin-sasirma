import React, {Component} from 'react';
import Home from './src/pages/Home';
import Game from './src/pages/Game';
import EndGame from './src/pages/EndGame';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      navigator: 'home'
    };
  }

  render() {
    let nav;

    switch (this.state.navigator) {
      case 'home':
        return <Home />;
        break;
      case 'game':
        return <Game />;
        break;
      case 'endgame': 
        return <EndGame />;
        break;
    }
  }
}