import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import SendScreenStyle from '../../styles/SendScreen.Style';


export default function SendScreenIconsComponent({ isAvailable, sendSMS, deletePerson }) {
  return (
    <View>
      <ScrollView horizontal style={SendScreenStyle.scroll_view} >
        {isAvailable ?
          <View style={SendScreenStyle.view_icon}>
            <Icon name="send" color="#FFF" size={32} onPress={sendSMS} />
          </View> : <Text style={{ color: '#FFF' }}>SMS not available</Text>}

        <View style={SendScreenStyle.view_icon2}>
          <Icon name="trash" color="#FFF" size={32} onPress={deletePerson} />
        </View>
      </ScrollView>
      <ScrollView horizontal>
      <Text style={{marginLeft: 15, fontSize: 17, fontWeight: 'bold', color: 'white'}}>Send</Text>
      <Text style={{marginLeft: 30, fontSize: 17, fontWeight: 'bold', color: 'white'}}>Delete</Text>
      </ScrollView>
    </View>
  )
}