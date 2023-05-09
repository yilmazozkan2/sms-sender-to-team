import { View, Text, TextInput, Button, Alert, TouchableOpacity, TouchableHighlight, ImageBackground, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Realm from 'realm';
import * as SMS from 'expo-sms';
import Icon from 'react-native-vector-icons/FontAwesome';
import SendScreenStyle from '../../styles/SendScreen.Style';
import SendScreenText from '../../components/SendScreen/SendScreenText';

export default function SendScreen({ route }) {

  const { name, phone, id } = route.params.item
  const [message, setMessage] = useState('');
  const [personID, setPersonID] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  const imageUrl = '../../images/back2.png';

  let realm = new Realm();

  useEffect(() => {
    setPersonID(id)

    checkAvailability();
  }, [])
  const checkAvailability = async () => {
    const isSmsAvailable = await SMS.isAvailableAsync();
    setIsAvailable(isSmsAvailable);
  }
  //id nin değişmesine göre bu fonksiyon çağrılır useCallback sayesinde performans katar
  const deletePerson = useCallback(() => {
    realm.write(() => {
      realm.delete(realm.objects('Person_Info').filtered(`id = ${personID}`))

    });
    Alert.alert('User Deleted Succesfully.');
  }, [realm, personID])

  const sendSMS = async() => {
    await SMS.sendSMSAsync(
      phone, message
    )
  };
  
  return (
    <ImageBackground
      style={SendScreenStyle.img_background}
      source={require(imageUrl)}>
      <View style={SendScreenStyle.view_padding}>
        <View>
          <Text style={SendScreenStyle.view_text}>{name}</Text>
          <Text style={SendScreenStyle.view_text}>{phone}</Text>
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
        <SendScreenText />
      </View>
    </ImageBackground>
  );
}