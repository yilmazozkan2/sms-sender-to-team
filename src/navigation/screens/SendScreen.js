import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Realm from 'realm';
import * as SMS from 'expo-sms';


export default function SendScreen({ route }) {
  const { name, phone, id } = route.params.item
  const [message, setMessage] = useState('');
  const [personID, setPersonID] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  const [phones, setPhones] = useState([]);
  let realm = new Realm();
  useEffect(() => {
    setPersonID(id)

    checkAvailability();
  }, [])
  const checkAvailability = async () => {
    const isSmsAvailable = await SMS.isAvailableAsync();
    setIsAvailable(isSmsAvailable);
  }
  const deletePerson = () => {
    realm.write(() => {
      realm.delete(realm.objects('Person_Info').filtered(`id = ${personID}`))

    });
    Alert.alert('Kişi Başarıyla Silindi.');
  }
  const sendSMS = async () => {
    const { result } = await SMS.sendSMSAsync(
      phone, message
    )
  }
  return (
    <View>
      {isAvailable ? <Button title='Gönder' onPress={sendSMS} /> : <Text>SMS not available</Text>}
      <Text>{name}</Text>
      <TextInput defaultValue={phone}/>
      <TextInput
        placeholder='Mesajınızı Giriniz.'
        style={{ backgroundColor: 'aqua', color: 'black' }}
        value={message}
        onChangeText={(e) => setMessage(e)}
      />
      <Button
        title='Kişiyi Sil'
        onPress={deletePerson}
      />
    </View>
  )
}