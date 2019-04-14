import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import { Context, action } from '../store/Store';

const ColorDetail = ({name, code, rightName}) => {
  const { dispatch } = useContext(Context);
  
  return(
    <CustomButton 
      text= {name} 
      textStyle = {buttonStyles.text} 
      touchStyle = {[buttonStyles.button, {backgroundColor: code}]}
      OnClick = { 
        () => rightName === name ? 
          alert('Doğru renk tebrikler :)') : 
          dispatch(action('endgame')) 
      }
    />
  );
}

const buttonStyles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 22,
  },

  button: {
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

export default ColorDetail;