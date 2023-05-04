import { View, Text } from 'react-native'
import React from 'react'
import PersonList from '../../components/PersonList'
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({navigation}) {
  return (
    <View style={{alignItems: 'center', justifyContent:'center', flex: 1}}>
      <Text onPress={()=>navigation.navigate('PersonScreen')} style={{fontSize: 23}}>Geçiş Yap</Text>
      <StatusBar style="auto" />
      <PersonList/>
    </View>
  )
}