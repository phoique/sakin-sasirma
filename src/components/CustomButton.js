import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const CustomButton = ({ viewStyle, touchStyle, textStyle, text, OnClick }) => (
  <View style={viewStyle}>
    <TouchableOpacity style={touchStyle} onPress = {OnClick}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  </View>
);

export default CustomButton;

