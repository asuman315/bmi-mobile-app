import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import tw from 'twrnc';
import AgeInput from './AgeInput';

const Inputs = () => {

  return (
    <View style={tw`mt-2`}>
      <AgeInput />
    </View>
  )
}

export const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: 18,
  },
  genderTitle: {
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
    textTransform: 'capitalize'
  },
});

export default Inputs