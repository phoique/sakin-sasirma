import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '../components/CustomText';
import CustomButton from '../components/CustomButton';
import { action, Context } from '../store/Store';

const EndGame = () => {

  const { dispatch } = useContext(Context);

  return(
    <View style={styles.container}>
      <CustomText 
        text= "Maalesef bilemedin. Bir daha ki sefere görüşürüz. :(" 
        textStyle={textStyles.text} 
      />

      <CustomButton 
        text='Tekrar Oyna' 
        textStyle={buttonStyles.text} 
        touchStyle={buttonStyles.button}
        OnClick= {() => dispatch(action('game'))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const textStyles = StyleSheet.create({
  text: {
    marginTop: 80,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
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

export default EndGame;