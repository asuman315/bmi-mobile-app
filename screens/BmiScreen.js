import { View, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Gender from '../components/Gender'
import Inputs from '../components/Inputs';

const BmiScreen = ({ navigation }) => {

 return (
  <SafeAreaView style={tw`bg-[#0f172a] p-4`}>
   <ScrollView>
    <Text style={styles.title}>bmi calculator</Text>
    <Gender />
    <Inputs navigation={navigation} />
   </ScrollView>
  </SafeAreaView>
 )
}

const styles = StyleSheet.create({
 title: {
  fontSize: 24,
  color: '#fff',
  textTransform: 'uppercase',
 }
});


export default BmiScreen