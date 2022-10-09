import { View, Text } from 'react-native'
import React from 'react';
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';

const BmiCtaBtn = () => {

  const dispatch = useDispatch();
  const age = useSelector(state => state.bmi.age);

  console.log("This is the User's age: ", age);

  return (
    <View>
    <Text style={tw`bg-green-700 mt-10 py-3 text-center text-white font-extrabold text-2xl capitalize tracking-wider rounded`}>get your bmi</Text>
    </View>
  )
}

export default BmiCtaBtn