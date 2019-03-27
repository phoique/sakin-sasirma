import { StyleSheet } from 'react-native';

const homeStyle = StyleSheet.create({

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
    height: 75, 
    width: 200,
    marginTop: 120
  }

});

export { homeStyle };
