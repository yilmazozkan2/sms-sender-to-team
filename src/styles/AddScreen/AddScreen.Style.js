import { StyleSheet, Dimensions } from "react-native";
export default StyleSheet.create({
  view: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  view_padding: {
    paddingHorizontal: 40,
    paddingVertical: 60
  },
  view_text: {
    color: '#FFF',
    fontSize: 40,
    paddingTop: 5
  },
  scroll_view: {
    marginTop: 15
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
    height: 66,
    width: 66,
    borderRadius: 50,
    backgroundColor: "#ff5c83",
    marginHorizontal: 22
  },
  view_icon2: {
    alignItems: "center",
    justifyContent: "center",
    height: 66,
    width: 66,
    borderRadius: 50,
    backgroundColor: "#bb32fe",
    marginLeft: 10,
  },
  text_input: {
    backgroundColor: '#FFF',
    color: '#4b3ca7',
    padding: 15,
    marginBottom: 15,
    borderRadius: 25,
    fontSize: 17,
    fontFamily: 'RobotoBold'
  },
  text:{
    color: "#FFF",
    fontFamily: "RobotoRegular",
    fontSize: 17,
    width: 60,
    textAlign: 'center',
    marginLeft: 25,
  },
  phone_input:{
    borderRadius: 25
  }
})