import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Realm from 'realm';

export default function HomeScreen() {
  // const name = useSelector(s => s.name);
  // const phone = useSelector(s => s.phone);
  const [dataSource, setDataSource] = useState();
  let realm = new Realm();
  readPersonDB = () => {
    var mydata = realm.objects('Person_Info');
    setDataSource(
      mydata
    );
  }
  const extractor = (_, index) => index.toString();

  const renderItems = ({ item, index }) => (
    <TouchableOpacity>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.phone}</Text>
      </View>
    </TouchableOpacity>
  );
  return (

    <View>
      <StatusBar style="auto" />

      <Button title='Read' onPress={readPersonDB} />
      <FlatList
        data={dataSource}
        keyExtractor={extractor}
        renderItem={renderItems}
      />
    </View>
  )
}