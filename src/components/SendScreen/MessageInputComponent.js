import { TextInput } from 'react-native'
import React from 'react'
import SendScreenStyle from '../../styles/SendScreen.Style';

export default function MessageInputComponent({setMessage}) {
  return (
    <TextInput style={SendScreenStyle.text_input} placeholder='Message' placeholderTextColor='black' onChangeText={(e) => setMessage(e)} />

  )
}