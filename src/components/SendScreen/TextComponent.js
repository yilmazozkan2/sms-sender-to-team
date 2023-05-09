import { View, Text } from 'react-native'
import React from 'react'
import TextComponentStyle from '../../styles/SendScreen/TextComponent.Style'
export default function SendScreenIcons() {
    return (
        <View>
            <View style={TextComponentStyle.view}>
                <Text style={TextComponentStyle.text}>Send</Text>
                <Text style={TextComponentStyle.text}>Delete</Text>
            </View>
        </View>
    )
}