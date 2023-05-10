import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    view_container: {
        backgroundColor: '#FEFEFE',
        height: 100,
        width: Dimensions.get('window').width / 1.5,
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    view_padding:{
        paddingHorizontal: 10,
        paddingTop: 40
    },
    name: {
        paddingTop: 5,
        paddingLeft: 10,
        color: '#a2a2db',
        fontWeight: 'bold',
        fontSize: 20,
    },
    phone:{
        color: '#555',
        fontSize: 18,
        paddingLeft: 10,
        paddingTop: 5,
        fontWeight: '300'
    },
    img_background: {
        width: '100%',
        height: '100%',
    backgroundColor: 'white',

    }
})
