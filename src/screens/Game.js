import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '../components/CustomButton';
import ColorDetail from '../components/ColorDetail';
import colorJSON from '../data/color.json';

// Color key for example Kırmızı, Mavi...
const colorKey = Object.keys(colorJSON);
//Random color number
const randomNumber = Math.floor(Math.random() * (colorKey.length + 1));

export default class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rightColor: colorKey[randomNumber],
      colors: colorKey,
    };
  }

  render() {
    const { rightColor, colors} = this.state;
    return (
      <View>
        <CustomText 
          text={rightColor}
          textStyle = {[textStyles.text, {backgroundColor: colorJSON[rightColor]}]} 
          viewStyle = {textStyles.view}
        />
        <View style = {styles.containerFlex}>
          {
            colors.map((color, key) => 
              <ColorDetail 
                key={key} 
                rightName = {rightColor}
                name = {color} 
                code = {colorJSON[color]}
              />
            )
          }
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
