import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Home from './src/components/pages/Home';

export default class App extends Component {
  render() {
    return (
      <View>
        <Home />
      </View>
    );
  }
}