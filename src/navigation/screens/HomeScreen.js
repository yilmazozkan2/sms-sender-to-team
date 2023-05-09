import { View, FlatList, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import Realm from 'realm';
import HomeScreenStyle from '../../styles/HomeScreen.Style';
import RenderItemComponent from '../../components/HomeScreen/RenderItemComponent';

export default function HomeScreen({ navigation }) {
  let realm = new Realm();

  const imageUrl = '../../images/back.png';
  const [dataSource, setDataSource] = useState();
  
  const readPersonDB = () => {
    var datas = realm.objects('Person_Info');
    setDataSource(
      datas
    );
  }


  useEffect(() => {
    readPersonDB();

    const handleChange = () => {
      readPersonDB();
    }
    realm.addListener('change', handleChange);

    return () => {
      realm.removeListener('change', handleChange);
    }
  }, [])

  
  const extractor = (_, index) => index.toString();
  return (
    <ImageBackground source={require(imageUrl)} style={HomeScreenStyle.img_background}>
      <View style={HomeScreenStyle.view_padding}>
        <StatusBar style="auto" />
        
        <FlatList
          data={dataSource}
          keyExtractor={extractor}
          renderItem={({item,index}) => <RenderItemComponent item={item} index={index} navigation={navigation}/>}
        />
      </View>
    </ImageBackground>
  );
}