import { View, Text } from 'react-native'
import React from 'react'
import AddPersonScreenStyle from '../../styles/AddPersonScreen.Style'
export default function AddScreenText() {
  return (
    <View style={AddPersonScreenStyle.view}>
          <Text style={AddPersonScreenStyle.text}> Add </Text>
          <Text style={AddPersonScreenStyle.text}> Call </Text>
        </View>
  )
}