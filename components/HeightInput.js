import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { styles } from './Inputs';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const HeightInput = () => {
 const [heightInputValue, setHeightInputValue] = useState('');
 const [unit, setUnit] = useState('m');
 const [displayUnits, setDisplayUnits] = useState(false);

 const [fontLoaded] = useFonts({
  Poppins_600SemiBold,
 });

 if (!fontLoaded) {
  return <AppLoading />;
 }

 const incrementHeight = () => {
  heightInputValue === '' ? setHeightInputValue(1) : setHeightInputValue(parseInt(heightInputValue) + 1)
 };

 const decrementHeight = () => {
  heightInputValue > 0 ? setHeightInputValue(heightInputValue - 1) : setHeightInputValue(0)
 };

 const setM = () => {
  setDisplayUnits(false);
  setUnit('m');
 };

 const setFt = () => {
  setDisplayUnits(false);
  setUnit('ft');
 };

 //console.log(weightInputValue);

 return (
  <View style={tw`mt-6`}>
   {
    displayUnits && (<View style={tw`bg-white absolute w-[50%] right-1 bg-[#475569] h-16 z-3 rounded`}>
     <Text style={tw`${unit === 'm' && 'bg-[#0284c7]'} px-2 py-1`} onPress={setM}>Kgs</Text>
     <Text style={tw`${unit === 'ft' && 'bg-[#0284c7]'} px-2 py-1`} onPress={setFt}>Ibs</Text>
    </View>)
   }
   <Text style={styles.title}>
    weight
   </Text>
   <View style={tw`flex flex-row`}>
    <View style={tw`w-[65%]`}>
     <TouchableOpacity style={tw`absolute right-2 z-2 top-4`} onPress={incrementHeight}>
      <FontAwesome5 name='plus-circle' size={38} />
     </TouchableOpacity>
     <TextInput style={tw`bg-white rounded-sm h-14 mt-2 text-xl font-semibold text-[#0f172a] pl-2 w-full text-center`}
      placeholder='e.g 77'
      onChangeText={text => setHeightInputValue(text)} keyboardType="number-pad"
      mode="outlined" >{heightInputValue}</TextInput>
     <TouchableOpacity style={tw`absolute top-4 left-2`} onPress={decrementHeight}>
      <FontAwesome5 name='minus-circle' size={38} />
     </TouchableOpacity>
    </View>
    <View style={tw`bg-white h-14 w-[30%] mt-2 ml-4 rounded flex flex-row px-2 justify-between items-center`}>
     <Text style={tw`text-lg font-semibold`} onPress={() => setDisplayUnits(true)}>
      {unit}
     </Text>
     <FontAwesome5 name='angle-down' size={38} onPress={() => setDisplayUnits(true)} />
    </View>
   </View>
  </View>
 )
}

export default HeightInput;