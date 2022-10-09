import { View, Text } from 'react-native'
import React, {useEffect} from 'react';
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';

const BmiCtaBtn = () => {

  const dispatch = useDispatch();
  const age = useSelector(state => state.bmi.age);
  const isGenderSelected = useSelector(state => state.bmi.isGenderSelected);

  useEffect(() => {
  console.log("Is gender selected? : ", isGenderSelected);
  });

  return (
    <View>
    <Text style={tw`bg-green-700 mt-10 py-3 text-center text-white font-extrabold text-2xl capitalize tracking-wider rounded`}>get your bmi</Text>
    </View>
  )
}

export default BmiCtaBtn