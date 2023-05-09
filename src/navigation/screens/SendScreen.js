import { View, Text, TextInput, ImageBackground, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Realm from 'realm';
import * as SMS from 'expo-sms';
import Icon from 'react-native-vector-icons/FontAwesome';
import SendScreenStyle from '../../styles/SendScreen.Style';
import AlertComponent from '../../components/AlertComponent';

export default function SendScreen({ route }) {

  const imageUrl = '../../images/back2.png';
  const { name, phone, id } = route.params.item
  const [message, setMessage] = useState('');
  const [personID, setPersonID] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);

  let realm = new Realm();

  useEffect(() => {
    setPersonID(id)
    checkAvailability();

  }, [])

  const checkAvailability = async () => {
    const isSmsAvailable = await SMS.isAvailableAsync();
    setIsAvailable(isSmsAvailable);
  }

  const deletePerson =() => {
    realm.write(() => {
      realm.delete(realm.objects('Person_Info').filtered(`id = ${personID}`))

    });
    AlertComponent('','User deleted successfully');
  }
  // useCallback mesaj ve telefondaki değişikliğe göre sendSMS fonksiyonunu çalıştıracak
  // otomatik çalışmayacak
  const sendSMS = useCallback(async() => {
    await SMS.sendSMSAsync(
      phone, message
    )
  }, [phone, message]);
  
  return (
    <ImageBackground
      style={SendScreenStyle.img_background}
      source={require(imageUrl)}>
      <View style={SendScreenStyle.view_padding}>
        <View style={SendScreenStyle.view_name_container}>
          <Text style={SendScreenStyle.name}>{name}</Text>
           
        </View>

        <TextInput style={SendScreenStyle.text_input} placeholder='Message' placeholderTextColor='black' onChangeText={(e) => setMessage(e)} />

        <ScrollView horizontal style={SendScreenStyle.scroll_view} >
          {isAvailable ?
            <View style={SendScreenStyle.view_icon}>
              <Icon name="send" color="#FFF" size={32} onPress={sendSMS} />
            </View> : <Text style={{ color: '#FFF' }}>SMS not available</Text>}

          <View style={SendScreenStyle.view_icon2}>
            <Icon name="trash" color="#FFF" size={32} onPress={deletePerson} />
          </View>

        </ScrollView>
      </View>
    </ImageBackground>
  );
}