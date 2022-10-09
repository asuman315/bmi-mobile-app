import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import tw from 'twrnc';
import AgeInput from './AgeInput';
import WeightInput from './WeightInput';
import HeightInput from './HeightInput';

const Inputs = () => {

  return (
    <View style={tw`mt-2`}>
      <AgeInput />
      <WeightInput />
      <HeightInput />
      <Text style={tw`bg-green-700 mt-10 py-3 text-center text-white font-extrabold text-2xl capitalize tracking-wider rounded`}>get your bmi</Text>
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