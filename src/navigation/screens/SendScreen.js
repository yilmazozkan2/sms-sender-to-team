import { View, ImageBackground } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Realm from 'realm';
import * as SMS from 'expo-sms';
import SendScreenStyle from '../../styles/SendScreen.Style';
import SendScreenIconsComponent from '../../components/SendScreen/SendScreenIconsComponent';
import MessageInputComponent from '../../components/SendScreen/MessageInputComponent';
import NameTextComponent from '../../components/SendScreen/NameTextComponent';
import BackIconComponent from '../../components/BackIconComponent';

export default function SendScreen({ route, navigation }) {

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
  const deletePerson = () => {
    realm.write(() => {
      realm.delete(realm.objects('Person_Info').filtered('id = ' + personID));

    });
    navigation.goBack();
  }
  // useCallback mesaj ve telefondaki değişikliğe göre sendSMS fonksiyonunu çalıştıracak
  // otomatik çalışmayacak
  const sendSMS = useCallback(async () => {
    await SMS.sendSMSAsync(
      phone, message
    )
  }, [phone, message]);

  return (
    <ImageBackground
      style={SendScreenStyle.img_background}
      source={require(imageUrl)}>
      <View style={SendScreenStyle.view_padding}>
        <BackIconComponent navigation={navigation} />
        <NameTextComponent name={name} />
        <MessageInputComponent message={message} setMessage={setMessage} />
        <SendScreenIconsComponent isAvailable={isAvailable} sendSMS={sendSMS} deletePerson={deletePerson} />
      </View>
    </ImageBackground>
  );
}