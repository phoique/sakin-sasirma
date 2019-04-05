import React, {Component} from 'react';
import Screen from './src/screens/Screen';
import Store from './src/store/Store';

export default class App extends Component {

  render() {
    return(
      <Store>
        <Screen /> 
      </Store>
    );
  }
}