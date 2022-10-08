import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { styles } from './Inputs';

const AgeInput = () => {

 const [fontLoaded] = useFonts({
  Poppins_600SemiBold,
 });

 if (!fontLoaded) {
  return <AppLoading />;
 }

 return (
  <View>
   <Text style={styles.title}>
    age
   </Text>
  </View>
 )
}

export default AgeInput