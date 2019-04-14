import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';
import { Context, action } from '../store/Store';

const Home = () => {

  const { dispatch } = useContext(Context);

  return (
    <View style={styles.container}>

      <CustomText 
        text= "Sakın Şaşırma" 
        textStyle={textStyles.text} 
      />

      <CustomText 
        text= "Bakalım renkleri ne kadar görüp basabileceksin?" 
        textStyle={textStyles2.text} 
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
    fontSize: 24,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
    marginTop: 100,
    borderRadius: 30,
    height: 60,
    width: 220
  }
});

const textStyles = StyleSheet.create({
  text: {
    marginTop: 50,
    fontSize: 28,
    fontWeight: 'bold',
  },
});

const textStyles2 = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center'
  },
});

export default Home;