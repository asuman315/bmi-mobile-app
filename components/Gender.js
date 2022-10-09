import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import tw from 'twrnc';
import AppLoading from 'expo-app-loading';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bmiActions } from '../store/bmiSlice';

const Gender = () => {
 const [isMaleChecked, setIsMaleChecked] = useState(false);
 const [isFemaleChecked, setIsFemaleChecked] = useState(false);
 const dispatch = useDispatch();

 useEffect(() => {
   if(isFemaleChecked || isMaleChecked) {
    dispatch(bmiActions.setIsGenderSelected(true));
    } else {
      dispatch(bmiActions.setIsGenderSelected(false));
    }
  }, [isFemaleChecked, isMaleChecked]);

 const [fontLoaded] = useFonts({
  Poppins_400Regular,
  Poppins_600SemiBold,
 });

 if (!fontLoaded) {
  return <AppLoading />;
 }

 const handleMalePress = () => {
  setIsMaleChecked(true);
  setIsFemaleChecked(false);
 };

 const handleFemalePress = () => {
  setIsMaleChecked(false);
  setIsFemaleChecked(true);
 };

 return (
  <View style={tw`mt-2`}>
   <Text style={styles.title}>Gender</Text>
   <View style={tw`flex flex-row justify-between mt-2`}>
       <TouchableOpacity style={tw`bg-[#475569] relative w-[46%] rounded-md py-4 ${isMaleChecked && 'border-green-700 border-2'}`} onPress={handleMalePress}>
     <View style={tw`absolute right-2 top-2`}>
      {isMaleChecked ? <Ionicons name="md-checkmark-circle" size={28} color="green" /> :
       <Ionicons name="md-checkmark-circle-outline" size={28} color="#0f172a" />}
     </View>
     <View style={tw`flex items-center`}>
      <FontAwesome5 name="male" size={98} color={isMaleChecked ? "green" : "#0f172a"} />
      <Text style={styles.genderTitle}>male</Text>
     </View>
    </TouchableOpacity>
       <TouchableOpacity style={tw`bg-[#475569] w-[46%] rounded-md py-4 ${isFemaleChecked && 'border-green-700 border-2'}`} onPress={handleFemalePress}>
     <View style={tw`absolute right-2 top-2`} >
      {isFemaleChecked ? <Ionicons name="md-checkmark-circle" size={28} color="green" /> :
       <Ionicons name="md-checkmark-circle-outline" size={28} color="#0f172a" />}
     </View>
     <View style={tw`flex items-center`}>
      <FontAwesome5 name="female" size={98} color={isFemaleChecked ? "green" : "#0f172a"} />
      <Text style={styles.genderTitle}>female</Text>
     </View>
    </TouchableOpacity>
   </View>
  </View>
 )
}

const styles = StyleSheet.create({
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

export default Gender