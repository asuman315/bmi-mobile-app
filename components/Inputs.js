import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import tw from 'twrnc';
import AgeInput from './AgeInput';
import WeightInput from './WeightInput';
import HeightInput from './HeightInput';
import BmiCtaBtn from './BmiCtaBtn';

const Inputs = ({ navigation }) => {

  return (
    <View style={tw`mt-2`}>
      <AgeInput />
      <WeightInput />
      <HeightInput />
      <BmiCtaBtn navigation={navigation} />
    </View>
  )
}

export const styles = StyleSheet.create({
  title: {
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: 18,
  },
  genderTitle: {
    color: '#fff',
    textTransform: 'capitalize'
  },
});

export default Inputs