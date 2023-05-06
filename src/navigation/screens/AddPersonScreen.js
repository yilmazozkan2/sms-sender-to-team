import { View, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import Realm from 'realm';

export default function AddPersonScreen() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  let realm = new Realm();


  var ID = realm.objects('Person_Info').length + 1;
  const values = {
    id: ID,
    name: name,
    phone: phone,
  }
  const addPerson = () => {
    realm.write(() => {
      realm.create('Person_Info', values);
    });
    Alert.alert("Kişi Başarıyla Eklendi.")
  }

  return (
    <View>
      <TextInput style={{ backgroundColor: 'yellow', color: 'white' }} placeholder='İsim Giriniz' placeholderTextColor='black' onChangeText={setName} />
      <TextInput style={{ backgroundColor: 'green', color: 'white' }} placeholder='Telefon Numarası Giriniz' placeholderTextColor='black' keyboardType='phone-pad' onChangeText={setPhone} />
      <Button title='Ekle' onPress={addPerson} />

    </View>
  )
}