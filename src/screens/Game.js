import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '../components/CustomButton';
import CustomButton from '../components/CustomButton';
import ColorDetail from '../components/ColorDetail';

export default class Game extends Component {

  constructor(props) {
  super(props);

  this.state = {
    rightColor: 'Mor',
    rightColorCode: 'purple',
    colors: ['Turuncu', 'Mavi', 'Kırmızı', 'Sarı', 'Siyah', 'Mor'],
    colorCode: ['orange', 'blue', 'red', 'yellow', 'black', 'purple']
  };
}

  render() {
    const { rightColor, rightColorCode, colors, colorCode } = this.state;
    return (
      <View>
        <CustomText 
          text={rightColor}
          textStyle = {[textStyles.text, {backgroundColor: rightColorCode}]} 
          viewStyle = {textStyles.view}
        />
        <View style = {styles.containerFlex}>
          {
            colors.map((color, key) => 
              <ColorDetail 
                key={key} 
                name = {color} 
                code = {colorCode[key]} 
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
