import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  view: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  view_padding: {
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  view_text: {
    color: '#FFF',
    fontSize: 30,
    paddingTop: 10
  },
  scroll_view: {
    marginTop: 10
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
    color: 'black',
    padding: 10,
    marginBottom: 10,
    marginTop:10,
    borderRadius: 25,
    fontSize: 16,
    textDecorationLine: 'none'
  },
  phone_input:{
    borderRadius: 25
  }
})
