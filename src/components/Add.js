import { View, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import Realm from 'realm';
export default function Add() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const apikey= 'xpbdsahz';
  const addPerson = () => {
    dispatch({ type: 'ADD_NAME', payload: { name: name } })
    dispatch({ type: 'ADD_PHONE', payload: { phone: phone } })
  }
  return (
    <View>
      <TextInput style={{ backgroundColor: 'yellow', color: 'white' }} placeholder='İsim Giriniz' placeholderTextColor='white' onChangeText={setName} />
      <TextInput style={{ backgroundColor: 'blue', color: 'white' }} placeholder='Telefon Numarası Giriniz' keyboardType='phone-pad' placeholderTextColor='white' onChangeText={setPhone} />

      <Button title='Ekle' onPress={addPerson} />
    </View>
  )
}