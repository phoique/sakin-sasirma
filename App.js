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

  changeNavigator = (navigator) => this.setState({ navigator }); 

  render() {

    switch (this.state.navigator) {
      case 'home':
        return <Home />;
      case 'game':
        return <Game />;
      case 'endgame': 
        return <EndGame />;
      default:
        <Home />
        break;
    }
  }
}