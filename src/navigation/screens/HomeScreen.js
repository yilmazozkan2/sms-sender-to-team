import { View, Text, TouchableOpacity, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import Realm from 'realm';

export default function HomeScreen({ navigation }) {

  const [dataSource, setDataSource] = useState();
  let realm = new Realm();
  readPersonDB = () => {
    var datas = realm.objects('Person_Info');
    // console.log(datas);
    setDataSource(
      datas
    ); 
  }

  const extractor = (_, index) => index.toString();
  const renderItems = ({ item, index }) => (
    <TouchableOpacity onPress={() => navigation.navigate('SendSMS', { item })}>
      <View key={index}>
        <Text>{item.name}</Text>
        <Text>{item.phone}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={readPersonDB} style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20}}>Kişileri Getir</Text>
      </TouchableOpacity>
      <FlatList
        data={dataSource}
        keyExtractor={extractor}
        renderItem={renderItems}
      />
    </View>
  )
}