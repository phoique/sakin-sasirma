import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>En yüksek skor: 234</Text>
        <Button text="deneme yazı" touchStyle={styles.buttonStyle}/>
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

  textStyle: {
    marginTop: 80,
    fontSize: 18
  },

  buttonStyle: {
    backgroundColor: '#8e44ad',
    marginTop: 120,
    padding: 20
  }

});
