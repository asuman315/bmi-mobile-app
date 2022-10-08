import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { styles } from './Inputs';

const WeightInput = () => {
 const [weightInputValue, setWeightInputValue] = useState('');

 const [fontLoaded] = useFonts({
  Poppins_600SemiBold,
 });

 if (!fontLoaded) {
  return <AppLoading />;
 }

 console.log(weightInputValue);

 return (
  <View style={tw`mt-4`}>
   <Text style={styles.title}>
    weight
   </Text>
   <TextInput style={tw`bg-white rounded-sm h-12 mt-2 text-xl font-semibold text-[#0f172a] pl-2 w-[60%]`}
    value={weightInputValue}
    placeholder='e.g 29'
    onChangeText={text => setWeightInputValue(text)} keyboardType="number-pad"
    mode="outlined" />
  </View>
  )
}

export default WeightInput;