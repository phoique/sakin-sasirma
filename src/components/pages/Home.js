import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { homeStyle } from '../styles/Styles';

class Home extends Component {
  render() {
    return (
      <View style={homeStyle.container}>
        <Text h4 h4Style={homeStyle.textStyle}>En yüksek skor: 234</Text>
        <Button
        buttonStyle= {homeStyle.buttonStyle}
          title="Oyunu başlat"
          type="outline"
          onPress = {() => alert('Button click')}
        />
      </View>
    )
  }
}

export default Home;
