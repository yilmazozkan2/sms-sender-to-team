import { View, Text } from 'react-native'
import React from 'react'
import SendScreenStyle from '../../styles/SendScreen.Style';


export default function NameTextComponent({name}) {
    return (
        <View style={SendScreenStyle.view_name_container}>
            <Text style={SendScreenStyle.name}>{name}</Text>
        </View>
    )
}