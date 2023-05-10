import { View, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Realm from 'realm';
import AddScreenStyle from '../../styles/AddScreen.Style';
import { AlertComponent } from '../../components/AlertComponent';
import NameInputComponent from '../../components/AddScreen/NameInputComponent';
import PhoneInputComponent from '../../components/AddScreen/PhoneInputComponent';
import IconsComponent from '../../components/AddScreen/IconsComponent';
import BackIconComponent from '../../components/BackIconComponent';
import * as Linking from "expo-linking";

export default function AddPersonScreen({ navigation }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const imageUrl = '../../images/back2.png';

  let realm = new Realm();

  var ID = realm.objects('Person_Info').length + 1;

  const values = {
    id: ID,
    name: name,
    phone: phone,
  }

  const triggerCall = () => {
    if (phone.length > 10) {
      Linking.openURL(`tel:${phone}`);
    } else {
      AlertComponent('', 'Phone number is not valid.');
    }
  }

  const addPerson = () => {
    if (name.length > 2 && phone.length > 10) {
      realm.write(() => {
        realm.create('Person_Info', values);
      });
      AlertComponent('', 'User Added Successfully.');
    } else {
      AlertComponent('', 'Please fill all fields.');
    }
  }

  return (
    <ImageBackground source={require(imageUrl)} style={AddScreenStyle.img_background}>
      <View style={AddScreenStyle.view_padding}>
        <BackIconComponent navigation={navigation} />
        <NameInputComponent name={name} setName={setName} />
        <PhoneInputComponent phone={phone} setPhone={setPhone} />
        <IconsComponent addPerson={addPerson} triggerCall={triggerCall} />

      </View>
    </ImageBackground>
  )
}