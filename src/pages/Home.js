import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>

        <CustomText 
          text='En yüksek skor 234' 
          textStyle={textStyles.text} 
        />

        <CustomButton 
          text='Oyuna Başla' 
          textStyle={buttonStyles.text} 
          touchStyle={buttonStyles.button}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    marginTop: 120,
    borderRadius: 30,
    height: 60,
    width: 220
  }
});

const textStyles = StyleSheet.create({
  text: {
    marginTop: 80,
    fontSize: 20
  },
});