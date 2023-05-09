import { View, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Realm from 'realm';
import PhoneInput from 'react-native-phone-number-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddPersonScreenStyle from '../../styles/AddPersonScreen.Style';
import AddScreenText from '../../components/AddScreen/AddScreenText';
import {AlertComponent} from '../../components/AlertComponent';

export default function AddPersonScreen() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const imageUrl = '../../images/back.png';

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
    <ImageBackground source={require(imageUrl)} style={AddPersonScreenStyle.img_background}>
      <View style={AddPersonScreenStyle.view_padding}>
        <TextInput style={AddPersonScreenStyle.text_input} placeholder='Name' placeholderTextColor='grey' onChangeText={(text)=>setName(text)}/>

        <PhoneInput
          defaultValue={phone}
          defaultCode='TR'
          withShadow
          containerStyle={AddPersonScreenStyle.phone_input}
          textContainerStyle={AddPersonScreenStyle.phone_input}
          onChangeFormattedText={(e) => {setPhone(e)}}
        />
        <ScrollView horizontal style={AddPersonScreenStyle.scroll_view}>
          <View style={AddPersonScreenStyle.view_icon}>
            <Icon name="plus" color="white" size={32} onPress={addPerson} />
          </View>
          <View style={AddPersonScreenStyle.view_icon2}>
            <Icon name="phone" color="white" size={32} />
          </View>
        </ScrollView>
        
        <AddScreenText/>
      </View>
    </ImageBackground>
  )
}