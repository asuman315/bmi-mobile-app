import { View, Text } from 'react-native'
import React from 'react';
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';

const BmiResults = () => {

  const bmi = useSelector(state => state.bmi.bmi);
  const healthyWeightOne = useSelector(state => state.bmi.healthyWeightOne);
  const healthyWeightTwo = useSelector(state => state.bmi.healthyWeightTwo);

  //Handling Bmi categories
  let bmiCategory = '';
  let recommendation = '';

  if (bmi < 18.5) {
    bmiCategory = 'Under Weight'
    recommendation = 'Mantaining a healthy weight  may reduce the risk of chronic diseases associated with overweight and obesity'
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategory = 'Normal weight'
    recommendation = 'Mantaining a healthy weight  may reduce the risk of chronic diseases associated with overweight, underweight and obesity.'
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiCategory = 'Over Weight'
    recommendation = 'Common treatments for overweight include losing weight through healthy eating and being more physically active. Mantaining a healthy weight may reduce the risk of chronic diseases associated with overweight.'
  } else {
    bmiCategory = 'Obese'
    recommendation = 'Common treatments for obesity include losing weight through healthy eating and being more physically active. Mantaining a healthy weight may reduce the risk of chronic diseases associated with obesity.'
  }

  return (
    <View style={tw`bg-slate-900 h-full`}>
      <Text style={tw`text-slate-300`}>Results: Your BMI is {bmi}</Text>
    </View>
  )
}

export default BmiResults