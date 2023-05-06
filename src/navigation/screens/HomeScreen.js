import { View, Text, TouchableOpacity,FlatList, Button } from 'react-native'
import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({navigation}) {

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
    <TouchableOpacity onPress={()=>navigation.navigate('AddPersonScreen')}>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.phone}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <StatusBar style="auto" />

      <Button title='Read' onPress={readPersonDB}/>
      <FlatList
        data={dataSource}
        keyExtractor={extractor}
        renderItem={renderItems}
      />
    </View>
  )
}