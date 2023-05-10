import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

export default function BackIconComponent({navigation}) {
  return (
    <Icon name="arrow-back" size={30} color="black" onPress={() => navigation.goBack()} />
  )
}