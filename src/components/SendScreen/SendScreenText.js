import { View, Text } from 'react-native'
import React from 'react'

export default function SendScreenIcons() {
    return (
        <View>
            <View style={{
                flexGrow: 1,
                flexDirection: 'row',
            }}>
                <Text
                    style={{
                        color: "#FFF",
                        fontFamily: "RobotoRegular",
                        fontSize: 17,
                        width: 60,
                        textAlign: 'center',
                        marginLeft: 23,

                    }}
                >
                    Send
                </Text>
                <Text
                    style={{
                        color: "#FFF",
                        fontFamily: "RobotoRegular",
                        fontSize: 17,
                        width: 60,
                        textAlign: 'center',
                        marginLeft: 53,
                    }}
                >
                    Delete
                </Text>
            </View>
        </View>
    )
}