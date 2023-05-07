import { View, TextInput, Text, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Realm from 'realm';
import PhoneInput from 'react-native-phone-number-input';

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
      <TextInput style={{ backgroundColor: 'white', color: 'black', paddingLeft: 10, paddingTop: 10 }} placeholder='enter name' placeholderTextColor='black' onChangeText={setName} />
      {/* <TextInput  style={{ backgroundColor: 'white', color: 'black', paddingLeft: 10, paddingTop:10 }} placeholder='enter phone number' placeholderTextColor='black' keyboardType='phone-pad' defaultValue='+' onChangeText={setPhone} /> */}
      
      <PhoneInput
      defaultValue={phone}
      defaultCode='TR'
      withShadow
      onChangeFormattedText={(e)=>{
        setPhone(e)
      }}
      />
      
      
      <TouchableOpacity onPress={addPerson} style={{alignItems: 'center', justifyContent: 'center', marginLeft: 15, marginTop:15, backgroundColor: 'aqua', width: 100, height: 40 }}>
        <Text style={{fontSize: 20}}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}