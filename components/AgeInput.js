import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { styles } from './Inputs';

const AgeInput = () => {

 const [ageInputValue, setAgeInputValue] = useState('');

 const [fontLoaded] = useFonts({
  Poppins_600SemiBold,
 });

 if (!fontLoaded) {
  return <AppLoading />;
 }

 return (
  <View style={tw`mt-4`}>
   <Text style={styles.title}>
    age
   </Text>
   <TextInput style={tw`bg-white rounded-sm h-12 mt-2 text-xl font-semibold text-[#0f172a] pl-2`}/>
  </View>
 )
}

export default AgeInput