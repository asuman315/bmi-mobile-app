import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import tw from 'twrnc';
import { styles } from './Inputs';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { bmiActions } from '../store/bmiSlice';

const HeightInput = () => {
 const [heightInputValue, setHeightInputValue] = useState('');
 const [unit, setUnit] = useState('m');
 const [displayUnits, setDisplayUnits] = useState(false);

 const dispatch = useDispatch();

 useEffect(() => {
    dispatch(bmiActions.setHeight(heightInputValue));
    dispatch(bmiActions.setHeightUnit(unit));
  }, [heightInputValue, unit]);

 const incrementHeight = () => {
  heightInputValue === '' ? setHeightInputValue(1) : setHeightInputValue(parseInt(heightInputValue) + 1)
  dispatch(bmiActions.setHeight(heightInputValue + 1));
 };

 const decrementHeight = () => {
  heightInputValue > 0 ? setHeightInputValue(heightInputValue - 1) : setHeightInputValue(0);
  heightInputValue > 0 ? dispatch(bmiActions.setHeight(heightInputValue - 1)) : dispatch(bmiActions.setHeight(0));
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
     <Text style={tw`${unit === 'm' && 'bg-[#0284c7]'} px-2 py-1`} onPress={setM}>m</Text>
     <Text style={tw`${unit === 'ft' && 'bg-[#0284c7]'} px-2 py-1`} onPress={setFt}>ft</Text>
    </View>)
   }
   <Text style={styles.title}>
    height
   </Text>
   <View style={tw`flex flex-row`}>
    <View style={tw`w-[65%]`}>
     <TouchableOpacity style={tw`absolute right-2 z-2 top-5`} onPress={incrementHeight}>
      <FontAwesome5 name='plus-circle' size={28} />
     </TouchableOpacity>
     <TextInput style={tw`bg-white rounded-sm h-14 mt-2 text-xl font-semibold text-[#0f172a] pl-2 w-full text-center`}
      placeholder='e.g 1.7'
      onChangeText={text => setHeightInputValue(text)} keyboardType="number-pad"
      mode="outlined" >{heightInputValue}</TextInput>
     <TouchableOpacity style={tw`absolute top-5 left-2`} onPress={decrementHeight}>
      <FontAwesome5 name='minus-circle' size={28} />
     </TouchableOpacity>
    </View>
    <View style={tw`bg-white h-14 w-[30%] mt-2 ml-4 rounded flex flex-row px-2 justify-between items-center`} >
      <Text style={tw`text-lg font-semibold`} onPress={() => setDisplayUnits(true)}>
       {unit}
      </Text>
      <FontAwesome5 name='angle-down' size={28} onPress={() => setDisplayUnits(true)} />
    </View>
   </View>
  </View>
 )
}

export default HeightInput;