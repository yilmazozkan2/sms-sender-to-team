import { View, ScrollView, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import AddScreenStyle from '../../styles/AddScreen.Style';

export default function IconsComponent({ addPerson, triggerCall }) {
  return (
    <View>
      <ScrollView horizontal style={AddScreenStyle.scroll_view}>
        <View style={AddScreenStyle.view_icon}>
          <Icon name="add-outline" color="white" size={32} onPress={addPerson} />
        </View>
        <View style={AddScreenStyle.view_icon2}>
          <Icon name="call-outline" color="white" size={32} onPress={triggerCall} />
        </View>
      </ScrollView>
      <ScrollView horizontal>
      <Text style={{marginLeft: 20, fontSize: 17, fontWeight: 'bold', color: 'white'}}>Add</Text>
      <Text style={{marginLeft: 40, fontSize: 17, fontWeight: 'bold', color: 'white'}}>Call</Text>
      </ScrollView>
    </View>
  )
}