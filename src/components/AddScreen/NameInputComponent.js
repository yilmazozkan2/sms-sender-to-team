import { TextInput } from 'react-native'
import React from 'react'
import AddScreenStyle from '../../styles/AddScreen.Style'

export default function NameInputComponent({ name, setName }) {
  return (
    <TextInput
      style={AddScreenStyle.text_input}
      placeholder='Name'
      placeholderTextColor='grey'
      value={name}
      onChangeText={(text) => setName(text)}
    />
  )
}