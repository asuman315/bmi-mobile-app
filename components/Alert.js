import React, { useEffect } from 'react';
import tw from 'twrnc';
import { Text } from 'react-native';

const Alert = ({ alert, setAlert }) => {
 //grab alert and setAlert from root component

 const { msg, type } = alert

 //clear alert after 3 secs
 useEffect(() => {
  const alertTimeOut = setTimeout(() => {
   setAlert({ show: false })
  }, 3000)

  //clean up function
  return () => clearTimeout(alertTimeOut)
 }, []);

 return (
  <Text style={tw`${type === 'danger' ? 'text-red-800 bg-red-100' : 'text-green-800 bg-green-100'} font-bold tracking-wider pl-2 rounded py-1`}>{msg}</Text>
 )
};

export default Alert;