import { View, Text } from 'react-native'
import React from 'react';
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';

const BmiResults = () => {

  const bmi = useSelector(state => state.bmi.bmi);
  const healthyWeightOne = useSelector(state => state.bmi.healthyWeightOne);
  const healthyWeightTwo = useSelector(state => state.bmi.healthyWeightTwo);

  return (
    <View style={tw`bg-slate-900 h-full`}>
      <Text style={tw`text-slate-300`}>Results: Your BMI is {bmi}</Text>
    </View>
  )
}

export default BmiResults