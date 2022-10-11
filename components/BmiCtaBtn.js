import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';
import Alert from './Alert';
import { bmiActions } from '../store/bmiSlice';

const BmiCtaBtn = ({ navigation }) => {

  const dispatch = useDispatch();
  const age = useSelector(state => state.bmi.age);
  const isGenderSelected = useSelector(state => state.bmi.isGenderSelected);
  const weight = useSelector(state => state.bmi.weight);
  const weightUnit = useSelector(state => state.bmi.weightUnit);
  const height = useSelector(state => state.bmi.height);
  const heightUnit = useSelector(state => state.bmi.heightUnit);

  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  useEffect(() => {
    console.log(`This is the height: ${height} and it is in ${heightUnit}`);
  });

  const getBMI = () => {
    if (!isGenderSelected) {
      setAlert({
        show: true,
        msg: 'Please select your gender',
        type: 'danger',
      });
      return;
  };

  if (age === '') {
    setAlert({
      show: true,
      msg: 'Please enter your age',
      type: 'danger',
    });
    return;
  };

  if (age < 18 && age !== '') {
    setAlert({
      show: true,
      msg: 'You must be 18 years or older',
      type: 'danger',
    });
    return
  };

  if (weight === '') {
    setAlert({
      show: true,
      msg: 'Please enter your weight',
      type: 'danger',
    });
    return
  };

  if (height === '') {
    setAlert({
      show: true,
      msg: 'Please enter your height',
      type: 'danger',
    });
    return
  };

  navigation.navigate('BmiResults');
};

  // Handling Healthy Weight Ranges and Bmi
  let convertedBmi = '';
  let convertedHealthyWeightOne = '';
  let convertedHealthyWeightTwo = '';
  const healthyBmiOne = 18.5;
  const healthyBmiTwo = 24.9;

  if (weightUnit === 'Ibs' && heightUnit === 'ft') {
    convertedBmi = (weight * 0.4536) / (height * height);
    convertedHealthyWeightOne = (height * height) * healthyBmiOne / 0.4536;
    convertedHealthyWeightTwo = (height * height) * healthyBmiTwo / 0.4536;
  };

  const bmi = Math.round((convertedBmi) * 10) / 10;
  const healthyWeightOne = Math.round(convertedHealthyWeightOne);
  const healthyWeightTwo = Math.round(convertedHealthyWeightTwo);
  const healthyWeightRange = [healthyWeightOne, healthyWeightTwo];

  useEffect(() => {
    dispatch(bmiActions.setBmi(bmi));
  });

  return (
    <View>
      {alert.show && (<View style={tw`absolute top-1 w-full`}>
        <Alert alert={alert} setAlert={setAlert} />
      </View>)}
      <TouchableOpacity onPress={getBMI}>
        <Text style={tw`bg-green-700 mt-10 py-3 text-center text-white font-extrabold text-2xl capitalize tracking-wider rounded`}>get your bmi</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BmiCtaBtn