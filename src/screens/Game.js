import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '../components/CustomButton';
import CustomButton from '../components/CustomButton';

export default class Game extends Component {

  constructor(props) {
  super(props);

  this.state = {
    rightColor: 'Mor',
    rightColorCode: 'purple',
  };
}

  render() {
    return (
      <View>
        <CustomText 
          text={this.state.rightColor}
          textStyle = {[textStyles.text, {backgroundColor: this.state.rightColorCode}]} 
          viewStyle = {textStyles.view}
        />

        <View style = {styles.containerFlex}>
          <CustomButton 
            text='Kırmızı' 
            textStyle = {buttonStyles.text} 
            touchStyle = {buttonStyles.button}
          />
          <CustomButton 
            text='Mavi' 
            textStyle = {buttonStyles.text} 
            touchStyle = {buttonStyles.button}
          />
          <CustomButton 
            text='Yeşil' 
            textStyle = {buttonStyles.text} 
            touchStyle = {buttonStyles.button}
          />
          <CustomButton 
            text='Sarı' 
            textStyle = {buttonStyles.text} 
            touchStyle = {buttonStyles.button}
          />
          <CustomButton 
            text='Turuncu' 
            textStyle = {buttonStyles.text} 
            touchStyle = {buttonStyles.button}
          />
          <CustomButton 
            text='Siyah' 
            textStyle = {buttonStyles.text} 
            touchStyle = {buttonStyles.button}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerFlex: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    padding: 15, 
    alignContent: 'center', 
    alignItems: 'center',
  }
});

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
    marginTop: 20,
    borderRadius: 20,
    height: 110,
    width: 110,
    marginLeft: 20,
  },
});