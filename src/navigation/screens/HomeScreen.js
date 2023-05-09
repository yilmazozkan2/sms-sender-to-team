import { View, Text, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import Realm from 'realm';
import HomeScreenStyle from '../../styles/HomeScreen.Style';

export default function HomeScreen({ navigation }) {

  const [dataSource, setDataSource] = useState();
  let realm = new Realm();
  const readPersonDB = () => {
    var datas = realm.objects('Person_Info');
    setDataSource(
      datas
    );
  }
  useEffect(() => {
    readPersonDB();
    
  }, [dataSource])

  const extractor = (_, index) => index.toString();
  const renderItems = ({ item, index }) => (

    <TouchableOpacity onPress={() => navigation.navigate('SendSMS', { item })}>
      <View key={index} style={{ backgroundColor: '#FEFEFE', height: 90, width: 205, borderRadius: 15, padding: 5, marginTop: 5 }}>
        <Text style={HomeScreenStyle.render_items_text}>{item.name}</Text>
        <Text style={HomeScreenStyle.render_items_text}>{item.phone}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <ImageBackground source={require('../../images/back.png')} style={{ width: '100%', height: '100%' }}>
      <View style={{ paddingHorizontal: 40 }}>
        <StatusBar style="auto" />
        {/* <TouchableOpacity onPress={readPersonDB} style={{ paddingTop: 60, justifyContent: 'center' }}>
          <Text style={{ fontSize: 40, color: '#522289', fontFamily: 'RobotoBold' }}>Kişileri Getir</Text>
        </TouchableOpacity> */}
        <FlatList
          data={dataSource}
          keyExtractor={extractor}
          renderItem={renderItems}
        />
      </View>
    </ImageBackground>


  )
}