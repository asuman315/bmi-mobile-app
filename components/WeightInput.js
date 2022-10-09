import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import tw from 'twrnc';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { styles } from './Inputs';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { bmiActions } from '../store/bmiSlice';

const WeightInput = () => {
 const [weightInputValue, setWeightInputValue] = useState('');
 const [unit, setUnit] = useState('Kgs');
 const [displayUnits, setDisplayUnits] = useState(false);
 
 useEffect(() => {
   dispatch(bmiActions.setWeight(weightInputValue));
 }, [weightInputValue]);

 const dispatch = useDispatch();

 const [fontLoaded] = useFonts({
  Poppins_600SemiBold,
 });

 if (!fontLoaded) {
  return <AppLoading />;
 }

 const incrementAge = () => {
  weightInputValue === '' ? setWeightInputValue(1) : setWeightInputValue(parseInt(weightInputValue) + 1)
  dispatch(bmiActions.setWeight(weightInputValue + 1));
 };

 const decrementAge = () => {
  weightInputValue > 0 ? setWeightInputValue(weightInputValue - 1) : setWeightInputValue(0);
  weightInputValue > 0 ? dispatch(bmiActions.setWeight(weightInputValue - 1)) : dispatch(bmiActions.setWeight(0));
 };

 const setKgs = () => {
  setDisplayUnits(false);
  setUnit('Kgs');
 };
 
 const setIbs = () => {
  setDisplayUnits(false);
  setUnit('Ibs');
 };

 console.log('This is the weight :', weightInputValue);

 //console.log(weightInputValue);

 return (
  <View style={tw`mt-6`}>
  {
   displayUnits &&  (<View style={tw`bg-white absolute w-[50%] right-1 bg-[#475569] h-16 z-3 rounded`}>
    <Text style={tw`${unit === 'Kgs' && 'bg-[#0284c7]'} px-2 py-1`} onPress={setKgs}>Kgs</Text>
    <Text style={tw`${unit === 'Ibs' && 'bg-[#0284c7]'} px-2 py-1`} onPress={setIbs}>Ibs</Text>
   </View>)
  } 
   <Text style={styles.title}>
    weight
   </Text>
   <View style={tw`flex flex-row`}>
    <View style={tw`w-[65%]`}>
     <TouchableOpacity style={tw`absolute right-2 z-2 top-5`} onPress={incrementAge}>
      <FontAwesome5 name='plus-circle' size={28} />
     </TouchableOpacity>
     <TextInput style={tw`bg-white rounded-sm h-14 mt-2 text-xl font-semibold text-[#0f172a] pl-2 w-full text-center`}
      placeholder='e.g 77'
      onChangeText={text => setWeightInputValue(text)} keyboardType="number-pad"
      mode="outlined" >{weightInputValue}</TextInput>
     <TouchableOpacity style={tw`absolute top-5 left-2`} onPress={decrementAge}>
      <FontAwesome5 name='minus-circle' size={28} />
     </TouchableOpacity>
    </View>
    <View style={tw`bg-white h-14 w-[30%] mt-2 ml-4 rounded flex flex-row px-2 justify-between items-center`}>
     <Text style={tw`text-lg font-semibold`} onPress={() => setDisplayUnits(true)}>
      {unit}
     </Text>
     <FontAwesome5 name='angle-down' size={28} onPress={() => setDisplayUnits(true)} />
    </View>
   </View>
  </View>
 )
}

export default WeightInput;