import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  view_padding: {
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  view_name_container:{
    alignItems: "center",
    marginBottom: 20,
  },
  name: {
    color: '#E6E6FA',
    fontSize: 20,
    textAlign: 'center'
  },
  img_background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  view_icon: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#ff5c83",
    marginHorizontal: 10
  },
  view_icon2: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#bb32fe",
    marginLeft: 10,
  },
  text_input: {
    backgroundColor: '#FFF',
    color: '#333',
    padding: 10,
    marginBottom: 10,
    borderRadius: 25,
    marginTop: 10,
    fontSize: 16
  }
})
