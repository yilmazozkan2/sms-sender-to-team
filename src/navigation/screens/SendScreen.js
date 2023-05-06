import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Realm from 'realm';
export default function SendScreen({ route }) {
  const { name, phone, id } = route.params.item
  const [message, setMessage] = useState('');
  const [personID, setPersonID] = useState('');
  let realm = new Realm();
  useEffect(() => {

    setPersonID(id)
  }, [])

  const deletePerson = () => {
    realm.write(() => {
      realm.delete(realm.objects('Person_Info').filtered(`id = ${personID}`))
      
    });
    Alert.alert('Kişi Başarıyla Silindi.');
  }
  return (
    <View>
      <Text>{name}</Text>
      <Text>{phone}</Text>
      <TextInput
        placeholder='Mesajınızı Giriniz.'
        style={{ backgroundColor: 'aqua', color: 'black' }}
        onChangeText={(e) => setMessage(e)}
      />
      <Button
        title='Gönder'
      />
      <Button
        title='Kişiyi Sil'
        onPress={deletePerson}
      />
    </View>
  )
}