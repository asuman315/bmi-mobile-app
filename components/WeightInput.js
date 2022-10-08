import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { styles } from './Inputs';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const WeightInput = () => {
 const [weightInputValue, setWeightInputValue] = useState('');

 const [fontLoaded] = useFonts({
  Poppins_600SemiBold,
 });

 if (!fontLoaded) {
  return <AppLoading />;
 }

 const incrementAge = () => {
  weightInputValue === '' ? setWeightInputValue(1) : setWeightInputValue(parseInt(weightInputValue) + 1)
 };

 const decrementAge = () => {
  weightInputValue > 0 ? setWeightInputValue(weightInputValue - 1) : setWeightInputValue(0)
 };

 //console.log(weightInputValue);

 return (
  <View style={tw`mt-4`}>
   <Text style={styles.title}>
    weight
   </Text>
   <View style={tw`w-[60%]`}>
    <TouchableOpacity style={tw`absolute right-2 z-2 top-4`} onPress={incrementAge}>
     <FontAwesome5 name='plus-circle' size={38} />
    </TouchableOpacity>
    <TextInput style={tw`bg-white rounded-sm h-14 mt-2 text-xl font-semibold text-[#0f172a] pl-2 w-full text-center`}
     placeholder='e.g 29'
     onChangeText={text => setWeightInputValue(text)} keyboardType="number-pad"
     mode="outlined" >{weightInputValue}</TextInput>
    <TouchableOpacity style={tw`absolute top-4 left-2`} onPress={decrementAge}>
     <FontAwesome5 name='minus-circle' size={38} />
    </TouchableOpacity>
   </View>
  </View>
 )
}

export default WeightInput;