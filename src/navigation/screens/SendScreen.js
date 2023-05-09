import { View, Text, TextInput, Button, Alert, TouchableOpacity, TouchableHighlight, ImageBackground, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Realm from 'realm';
import * as SMS from 'expo-sms';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SendScreenStyle from '../../styles/SendScreen.Style';

export default function SendScreen({ route }) {
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
  const deletePerson = () => {
    realm.write(() => {
      realm.delete(realm.objects('Person_Info').filtered(`id = ${personID}`))

    });
    Alert.alert('User Deleted Succesfully.');
  }
  const sendSMS = async () => {
    await SMS.sendSMSAsync(
      phone, message
    )
  }
  return (
    <ImageBackground
      style={SendScreenStyle.img_background}
      source={require('../../images/back2.png')}>
      <View style={{ paddingHorizontal: 40, paddingVertical: 60 }}>
        <View>
          <Text style={{ color: '#FFF', fontSize: 40 }}>{name}</Text>
          <Text style={{ color: '#FFF', fontSize: 40, paddingTop: 5 }}>{phone}</Text>
        </View>
        <TextInput style={{ backgroundColor: 'white', color: '#4b3ca7', padding: 15, marginBottom: 15, borderRadius: 25, fontSize: 17, fontFamily: 'RobotoBold' }} placeholder='Message' placeholderTextColor='black' onChangeText={(e) => setMessage(e)} />
        <ScrollView horizontal style={{ marginTop: 15 }} >
          {isAvailable ? <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 66,
              width: 66,
              borderRadius: 50,
              backgroundColor: "#ff5c83",
              marginHorizontal: 22,
            }}
          >
            <Icon name="send" color="white" size={32} onPress={sendSMS} />
          </View> : <Text style={{ color: '#FFF' }}>SMS not available</Text>}

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 66,
              width: 66,
              borderRadius: 50,
              backgroundColor: "#bb32fe",
              marginHorizontal: 22,
            }}
          >
            <Icon name="trash" color="white" size={32} onPress={deletePerson} />
          </View>
        </ScrollView>


      </View>
    </ImageBackground>


  );
}
/*
 

*/