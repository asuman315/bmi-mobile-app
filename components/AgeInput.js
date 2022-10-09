import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import tw from 'twrnc';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { styles } from './Inputs';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { bmiActions } from '../store/bmiSlice';

const AgeInput = () => {

  const [ageInputValue, setAgeInputValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bmiActions.setAge(ageInputValue));
  }, [ageInputValue]);
  
  const [fontLoaded] = useFonts({
    Poppins_600SemiBold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  };


  const incrementAge = () => {
    ageInputValue === '' ? setAgeInputValue(1) : setAgeInputValue(parseInt(ageInputValue) + 1)
    dispatch(bmiActions.setAge(ageInputValue + 1));
  };

  const decrementAge = () => {
    ageInputValue > 0 ? setAgeInputValue(ageInputValue - 1) : setAgeInputValue(0)
    ageInputValue > 0 ? dispatch(bmiActions.setAge(ageInputValue - 1)) : dispatch(bmiActions.setAge(0));
  };

  return (
    <View style={tw`mt-4`}>
      <Text style={styles.title}>
        age
      </Text>
      <View>
        <TouchableOpacity style={tw`absolute right-2 z-2 top-4`} onPress={incrementAge}>
          <FontAwesome5 name='plus-circle' size={38} />
        </TouchableOpacity>
        <TextInput style={tw`bg-white rounded-sm h-14 mt-2 text-xl font-semibold text-[#0f172a] pl-2 text-center`}
          placeholder='e.g 29'
          onChangeText={text => setAgeInputValue(text)} keyboardType="number-pad"
          mode="outlined"
          maxLength={3} >
          {ageInputValue}
        </TextInput>
        <TouchableOpacity style={tw`absolute top-4 left-2`} onPress={decrementAge}>
          <FontAwesome5 name='minus-circle' size={38} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AgeInput