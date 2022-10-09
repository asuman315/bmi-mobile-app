import { View, Text } from 'react-native'
import React, {useEffect} from 'react';
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';

const BmiCtaBtn = () => {

  const dispatch = useDispatch();
  const age = useSelector(state => state.bmi.age);
  const isGenderSelected = useSelector(state => state.bmi.isGenderSelected);
  const weight = useSelector(state => state.bmi.weight);
  const weightUnit = useSelector(state => state.bmi.weightUnit);

  useEffect(() => {
  console.log(`This is the weight: ${weight} and it is in ${weightUnit}`);
  });

  return (
    <View>
    <Text style={tw`bg-green-700 mt-10 py-3 text-center text-white font-extrabold text-2xl capitalize tracking-wider rounded`}>get your bmi</Text>
    </View>
  )
}

export default BmiCtaBtn