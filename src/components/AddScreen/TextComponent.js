import { View, Text } from 'react-native'
import React from 'react'
import AddScreenStyle from '../../styles/AddScreen/AddScreen.Style'

export default function AddScreenText() {
  return (
    <View style={AddScreenStyle.view}>
          <Text style={AddScreenStyle.text}> Add </Text>
          <Text style={AddScreenStyle.text}> Call </Text>
        </View>
  )
}