import { View, Text } from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux';
export default function PersonList() {
  const name = useSelector(s => s.name);
  const phone = useSelector(s => s.phone);

  return (
    <View>
      <Text>{name}</Text>
      <Text>{phone}</Text>

      {/* <FlatList/> */}
    </View>
  )
}