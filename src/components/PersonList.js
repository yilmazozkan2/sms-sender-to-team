import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Realm from 'realm';

export default function PersonList() {
  const name = useSelector(s => s.name);
  const phone = useSelector(s => s.phone);
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
      <Button title='Read' onPress={readPersonDB}/>
      <FlatList
        data={dataSource}
        keyExtractor={extractor}
        renderItem={renderItems}
      />
    </View>
  )
}