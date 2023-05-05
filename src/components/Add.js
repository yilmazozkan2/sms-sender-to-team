import { View, TextInput, Button, Text, Alert, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Realm from 'realm';


export default function Add({ navigation }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  let realm = new Realm();


  var ID = realm.objects('Person_Info').length + 1;
  const values = {
    id: ID,
    name: name,
    phone: phone,
  }
  const addPerson = () => {
    dispatch({ type: 'ADD_NAME', payload: { name: name } })
    dispatch({ type: 'ADD_PHONE', payload: { phone: phone } })

    realm.write(() => {
      realm.create('Person_Info', values);
    });
    Alert.alert("Kişi Başarıyla Eklendi.")
  }

  return (
    <View>
      <TextInput style={{ backgroundColor: 'yellow', color: 'white' }} placeholder='İsim Giriniz' placeholderTextColor='white' onChangeText={setName} />
      <TextInput style={{ backgroundColor: 'blue', color: 'white' }} placeholder='Telefon Numarası Giriniz' keyboardType='phone-pad' placeholderTextColor='white' onChangeText={setPhone} />
      <Button title='Ekle' onPress={addPerson} />

    </View>
  )
}