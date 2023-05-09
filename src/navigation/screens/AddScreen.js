import { View, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Realm from 'realm';
import AddScreenStyle from '../../styles/AddScreen.Style';
import { AlertComponent } from '../../components/AlertComponent';
import NameInputComponent from '../../components/AddScreen/NameInputComponent';
import PhoneInputComponent from '../../components/AddScreen/PhoneInputComponent';
import IconsComponent from '../../components/AddScreen/IconsComponent';
import BackIconComponent from '../../components/BackIconComponent';


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

  const addPerson = () => {
    realm.write(() => {
      realm.create('Person_Info', values);
    });
    AlertComponent('', 'User Added Successfully.');
  }

  return (
    <ImageBackground source={require(imageUrl)} style={AddScreenStyle.img_background}>
      <View style={AddScreenStyle.view_padding}>
        <BackIconComponent navigation={navigation} />
        <NameInputComponent name={name} setName={setName} />
        <PhoneInputComponent phone={phone} setPhone={setPhone} />
        <IconsComponent addPerson={addPerson}/>
        
      </View>
    </ImageBackground>
  )
}