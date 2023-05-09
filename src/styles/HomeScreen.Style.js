import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    view_container: {
        backgroundColor: '#FEFEFE',
        height: 100,
        width: Dimensions.get('window').width / 1.5,
        borderRadius: 15,
        padding: 5,
        marginTop: 5,

    },
    name: {
        fontSize: 25,
        paddingVertical: 5,
        paddingLeft: 5,
        color: '#a2a2db',
    },
    view_padding: {
        paddingHorizontal: 40,
        paddingVertical: 60
    },
    img_background: {
        width: '100%',
        height: '100%'
    }
})