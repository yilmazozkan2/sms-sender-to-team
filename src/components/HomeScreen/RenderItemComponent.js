import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeScreenStyle from '../../styles/HomeScreen.Style'

export default function RenderItemComponent({item, index, navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('SendSMS', { item })}>
      <View key={index} style={{ backgroundColor: '#FEFEFE', height: 90, width: 205, borderRadius: 15, padding: 5, marginTop: 5 }}>
        <Text style={HomeScreenStyle.name}>{item.name}</Text>
        <Text style={HomeScreenStyle.phone}>{item.phone}</Text>
      </View>
    </TouchableOpacity>
  )
}