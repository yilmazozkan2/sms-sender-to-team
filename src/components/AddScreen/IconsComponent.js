import { View, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import AddScreenStyle from '../../styles/AddScreen.Style';

export default function IconsComponent({addPerson}) {
  return (
    <ScrollView horizontal style={AddScreenStyle.scroll_view}>
          <View style={AddScreenStyle.view_icon}>
            <Icon name="add-outline" color="white" size={32} onPress={addPerson} />
          </View>
          <View style={AddScreenStyle.view_icon2}>
            <Icon name="call-outline" color="white" size={32} />
          </View>
        </ScrollView>
  )
}