import { View, TextInput, Button, Text, Alert, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Realm from 'realm';


export default function Add({navigation}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  let realm = new Realm();

  addPersonDB = () => {
    realm.write(() => {

      var ID = realm.objects('Person_Info').length + 1;

      realm.create('Person_Info', {
        id: ID,
        name: name,
        phone: phone,
      });

    });

    Alert.alert("Kişi Başarıyla Eklendi.")
  }

  const addPerson = () => {
    dispatch({ type: 'ADD_NAME', payload: { name: name } })
    dispatch({ type: 'ADD_PHONE', payload: { phone: phone } })
  }

  return (
    <View>
      <TextInput style={{ backgroundColor: 'yellow', color: 'white' }} placeholder='İsim Giriniz' placeholderTextColor='white' onChangeText={setName} />
      <TextInput style={{ backgroundColor: 'blue', color: 'white' }} placeholder='Telefon Numarası Giriniz' keyboardType='phone-pad' placeholderTextColor='white' onChangeText={setPhone} />
      <Button title='Ekle' onPress={addPerson} />
      <Button title='EkleDB' onPress={addPersonDB} />

    </View>
  )
}