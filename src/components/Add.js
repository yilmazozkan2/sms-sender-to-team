import { View, TextInput, Button, Text, Alert, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Realm from 'realm';


export default function Add() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dataSource, setDataSource] = useState();

  const dispatch = useDispatch();
  let realm = new Realm();

  useEffect(() => {
    try {
      //schema kısmı çözülecek try catch olduğundan hataya yakalanmıyor
      Realm.open({ schema: [], deleteRealmIfMigrationNeeded: true })
        .then(realm => {
          realm.write(() => {
            realm.delete(realm.objects('Person_Info'));
            realm.create('Person_Info', values);
          })

          realm.close();
        })

    } catch (error) {
      console.log(error);
    }
  }, [])

  readPersonDB = () => {
    var mydata = realm.objects('Person_Info');
    setDataSource(
      mydata
    );
  }

  addPersonDB = () => {
    realm.write(() => {

      var ID = realm.objects('Person_Info').length + 1;

      realm.create('Person_Info', {
        id: ID,
        name: name,
        phone: phone,
      });

    });
    Alert.alert("Kişi Başarıyla Eklendi.")
  }

  const addPerson = () => {
    dispatch({ type: 'ADD_NAME', payload: { name: name } })
    dispatch({ type: 'ADD_PHONE', payload: { phone: phone } })
  }
  function goToHomePage(id, name, phone) {
    this.props.navigation.navigate('PersonList', {
      ID: id,
      NAME: name,
      PHONE: phone,
    });
  }
  const extractor = (_, index) => index.toString();

  const renderItems = ({ item, index }) => (
    <TouchableOpacity onPress={this.goToHomePage.bind(this, item.id, item.name, item.phone)}>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.phone}</Text>
      </View>
    </TouchableOpacity>
  );


  return (
    <View>
      <TextInput style={{ backgroundColor: 'yellow', color: 'white' }} placeholder='İsim Giriniz' placeholderTextColor='white' onChangeText={setName} />
      <TextInput style={{ backgroundColor: 'blue', color: 'white' }} placeholder='Telefon Numarası Giriniz' keyboardType='phone-pad' placeholderTextColor='white' onChangeText={setPhone} />
      <Button title='Ekle' onPress={addPerson} />
      <Button title='EkleDB' onPress={addPersonDB} />
      <Button title='OkuDB' onPress={readPersonDB} />
      <FlatList
        data={dataSource}
        keyExtractor={extractor}
        renderItem={renderItems}
      />
    </View>
  )
}