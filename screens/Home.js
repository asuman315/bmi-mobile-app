import { View, SafeAreaView, Text, StyleSheet } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_300Light, Poppins_700Bold } from '@expo-google-fonts/poppins';

const Home = () => {
  const [fontLoaded] = useFonts({
    Poppins_300Light,
    Poppins_700Bold,
  });
  
  // if (!fontLoaded ) {
  //   return <AppLoading />;
  // }

  return (
    <SafeAreaView style={tw`bg-[#0f172a]`}>
      <Text style={tw`text-2xl font-extrabold m-5 android:mt-12 uppercase ios:mt-20 text-[#fff]`}>bmi calculator</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 24,
    color: '#fff',
  }
});

//{tw`${styles.title} text-2xl font-extrabold m-5 android:mt-12 uppercase ios:mt-20 text-[#fff]`}


export default Home