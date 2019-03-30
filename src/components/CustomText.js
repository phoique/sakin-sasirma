import React from 'react';
import { Text, View } from 'react-native';

export default CustomText = ({ viewStyle, textStyle, text }) => (
  <View style={viewStyle}>
    <Text style={textStyle}>{text}</Text>
  </View>
);