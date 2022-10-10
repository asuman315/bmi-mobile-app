import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';
import Alert from './Alert';

const BmiCtaBtn = () => {

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
  };

  if (age === '') {
    setAlert({
      show: true,
      msg: 'Please enter your age',
      type: 'danger',
    });
  };

  if (age < 18 && age !== '') {
    setAlert({
      show: true,
      msg: 'You must be 18 years or older',
      type: 'danger',
    });
  };

  if (weight === '') {
    setAlert({
      show: true,
      msg: 'Please enter your weight',
      type: 'danger',
    });
  };

  if (height === '') {
    setAlert({
      show: true,
      msg: 'Please enter your height',
      type: 'danger',
    });
  };

};

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