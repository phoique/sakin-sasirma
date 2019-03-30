import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default CustomButton = ({ viewStyle, touchStyle, textStyle, text }) => (
  <View style={viewStyle}>
    <TouchableOpacity style={touchStyle} onPress = {() => alert('Click')}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  </View>
);


