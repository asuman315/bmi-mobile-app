import { View, Text, ScrollView } from 'react-native'
import React from 'react';
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';

const BmiResults = ({ navigation }) => {

  const bmi = useSelector(state => state.bmi.bmi);
  const healthyWeightOne = useSelector(state => state.bmi.healthyWeightOne);
  const healthyWeightTwo = useSelector(state => state.bmi.healthyWeightTwo);
  const height = useSelector(state => state.bmi.height);
  const weightUnit = useSelector(state => state.bmi.weightUnit);
  const heightUnit = useSelector(state => state.bmi.heightUnit);

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
    <ScrollView style={tw`bg-slate-900 h-full px-3 py-4`}>
      <Text style={tw`text-slate-300 uppercase pb-5 text-2xl font-bold`}>bmi Results</Text>
      <Text style={tw`text-slate-300 text-lg`}>
        Your BMI is <Text style={tw`${bmiCategory === 'Normal weight' ? 'text-green-900' : 'text-red-900'} font-bold`} >{bmi}</Text>, indicating your weight is in the <Text style={tw`${bmiCategory === 'Normal weight' ? 'text-green-900' : 'text-red-900'} font-bold`}>{bmiCategory}</Text> category for adults of your height.
      </Text>
      <Text style={tw`text-slate-300 text-lg mt-3`}>
        For your height of <Text>{height}</Text> {heightUnit === 'm' ? 'meters' : 'feet'}, a normal weight range would be from <Text>{healthyWeightOne}</Text> to <Text>{healthyWeightTwo}</Text> {weightUnit === 'Kgs' ? 'kilograms' : 'Pounds'}.
      </Text>
      <Text style={tw`text-slate-300 text-lg mt-3`}>{recommendation}</Text>
      <Text onPress={() => navigation.navigate('Home')} style={tw`text-slate-300 text-lg bg-slate-600 text-center mt-6 mb-12 py-4 rounded text-2xl font-bold`}>Back To Home</Text>
    </ScrollView>
  )
}

export default BmiResults