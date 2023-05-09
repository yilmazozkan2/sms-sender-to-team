import { View, TextInput, Text, Alert, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React, { useState, useRef } from 'react'
import Realm from 'realm';
import PhoneInput from 'react-native-phone-number-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddPersonScreenStyle from '../../styles/AddPersonScreen.Style';


export default function AddPersonScreen() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

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
    Alert.alert("Kişi Başarıyla Eklendi.")
  }
  return (
    <ImageBackground source={require('../../images/back2.png')} style={AddPersonScreenStyle.img_background}>
      <View style={{ paddingHorizontal: 40, paddingVertical: 60 }}>
        <TextInput
          style={{
            backgroundColor: 'white',
            color: '#4b3ca7',
            padding: 15,
            marginBottom: 15,
            borderRadius: 25, fontSize: 17, fontFamily: 'RobotoBold'
          }} placeholder='Name' placeholderTextColor='black' onChangeText={(text)=>setName(text)}
        />

        <PhoneInput
          defaultValue={phone}
          defaultCode='TR'
          withShadow
          containerStyle={{ borderRadius: 25 }}
          textContainerStyle={{ borderRadius: 25 }}
          onChangeFormattedText={(e) => {
            setPhone(e)
          }}
        />
        <ScrollView horizontal style={{ marginTop: 15 }}>
          <View
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
            <Icon name="plus" color="white" size={32} onPress={addPerson} />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 66,
              width: 66,
              borderRadius: 50,
              backgroundColor: "#bb32fe",
              marginLeft: 10,
            }}
          >
            <Icon name="phone" color="white" size={32} />
          </View>
        </ScrollView>
        <View style={{
          flexGrow: 1,
          flexDirection: 'row',
        }}>
          <Text
            style={{
              color: "#FFF",
              fontFamily: "RobotoRegular",
              fontSize: 17,
              width: 60,
              textAlign: 'center',
              marginLeft: 25,

            }}
          >
            Add
          </Text>
          <Text
            style={{
              color: "#FFF",
              fontFamily: "RobotoRegular",
              fontSize: 17,
              width: 60,
              textAlign: 'center',
              marginLeft: 37,
            }}
          >
            Call
          </Text>
        </View>
      </View>
    </ImageBackground>
  )
}