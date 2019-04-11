import React from 'react';
import { StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

export default ColorDetail = ({name, code, rightName}) => (
  <CustomButton 
    text= {name} 
    textStyle = {buttonStyles.text} 
    touchStyle = {[buttonStyles.button, {backgroundColor: code}]}
    OnClick = { () => alert( rightName === name ? "true": "false" ) }
  />
);

const buttonStyles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 22,
  },

  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    marginTop: 20,
    borderRadius: 20,
    height: 110,
    width: 110,
    marginLeft: 20,
  },
});