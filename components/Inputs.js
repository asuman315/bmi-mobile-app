import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const Inputs = () => {
  return (
    <View style={tw`mt-2`}>
      <Text
        style={styles.title}
      >
        age
      </Text>
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

export default Inputs