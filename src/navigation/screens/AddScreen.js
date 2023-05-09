import { View, TextInput, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Realm from 'realm';
import PhoneInput from 'react-native-phone-number-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddScreenStyle from '../../styles/AddScreen/AddScreen.Style';
import TextComponent from '../../components/AddScreen/TextComponent';
import {AlertComponent} from '../../components/AlertComponent';

export default function AddPersonScreen() {
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
        <TextInput style={AddScreenStyle.text_input} placeholder='Name' placeholderTextColor='grey' onChangeText={(text)=>setName(text)}/>

        <PhoneInput
          defaultValue={phone}
          defaultCode='TR'
          withShadow
          containerStyle={AddScreenStyle.phone_input}
          textContainerStyle={AddScreenStyle.phone_input}
          onChangeFormattedText={(e) => {setPhone(e)}}
        />
        <ScrollView horizontal style={AddScreenStyle.scroll_view}>
          <View style={AddScreenStyle.view_icon}>
            <Icon name="plus" color="white" size={32} onPress={addPerson} />
          </View>
          <View style={AddScreenStyle.view_icon2}>
            <Icon name="phone" color="white" size={32} />
          </View>
        </ScrollView>
        
        <TextComponent/>
      </View>
    </ImageBackground>
  )
}