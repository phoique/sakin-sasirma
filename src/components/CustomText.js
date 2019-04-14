import React from 'react';
import { Text, View } from 'react-native';

const CustomText = ({ viewStyle, textStyle, text }) => (
  <View style={viewStyle}>
    <Text style={textStyle}>{text}</Text>
  </View>
);

export default CustomText;