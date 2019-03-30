import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>En yüksek skor: 234</Text>
        <Button text='Oyuna Başla' textStyle={styles.textStyle} touchStyle={styles.buttonStyle}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    marginTop: 80,
    fontSize: 18
  },
  textStyle: {
    color: 'white',
    fontSize: 22,
  },

  buttonStyle: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
    marginTop: 120,
    borderRadius: 30,
    height: 60,
    width: 220
  }

});