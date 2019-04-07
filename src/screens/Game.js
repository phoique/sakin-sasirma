import React, { Component } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import CustomText from '../components/CustomButton';
import CustomButton from '../components/CustomButton';

export default class Game extends Component {
  render() {
    return (
      <View>

        <CustomText 
        text='KIRMIZI' 
        textStyle = {textStyles.text} 
        viewStyle = {textStyles.view}
        />


          <CustomButton 
          text='Oyuna Başla' 
          textStyle = {buttonStyles.text} 
          touchStyle = {buttonStyles.button}
          />
          <CustomButton 
          text='Oyuna Başla' 
          textStyle = {buttonStyles.text} 
          touchStyle = {buttonStyles.button}
          />
          <CustomButton 
          text='Oyuna Başla' 
          textStyle = {buttonStyles.text} 
          touchStyle = {buttonStyles.button}
          />


      </View>
    );
  }
}

const textStyles = StyleSheet.create({
  text: {
    color: 'white',
    marginTop: 20,
    fontSize: 20,
    backgroundColor: 'blue',
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30
  },
  view: {
    alignItems: 'center'
  }
});

const buttonStyles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 22,
  },

  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
    marginTop: 30,
    borderRadius: 20,
    height: 110,
    width: 110,
    marginLeft: 20,
  },
});