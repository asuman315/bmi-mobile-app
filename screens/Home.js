import { View, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const Home = ({ navigation }) => {

  return (
    <SafeAreaView style={tw`bg-[#0f172a] h-full flex items-center justify-center`}>
      <Text style={tw`text-white font-bold text-2xl uppercase bg-slate-700 px-12 py-3 rounded`} onPress={() => navigation.push('BmiScreen')}>
        Get your bmi
      </Text>
    </SafeAreaView>
  )
}

//{tw`${styles.title} text-2xl font-extrabold m-5 android:mt-12 uppercase ios:mt-20 text-[#fff]`}


export default Home