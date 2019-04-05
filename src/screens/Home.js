import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';
import { Context, action } from '../store/Store';

export default Home = () => {

  const { state, dispatch } = useContext(Context);

  return (
    <View style={styles.container}>

      <CustomText 
        text= {`En yüksek skor ${state.score}`} 
        textStyle={textStyles.text} 
      />

      <CustomButton 
        text='Oyuna Başla' 
        textStyle={buttonStyles.text} 
        touchStyle={buttonStyles.button}
        OnClick= {() => dispatch(action('game'))}
      />

    </View>
  );
};

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