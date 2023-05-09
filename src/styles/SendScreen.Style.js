import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
  view_padding: {
    paddingHorizontal: 40,
    paddingVertical: 60
  },
  view_name_container:{
    alignItems: "center",
  },
  name: {
    color: '#a2a2db',
    fontSize: 40,
    fontWeight: 'bold'
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
    color: '#000',
    padding: 15,
    marginBottom: 15,
    borderRadius: 25,
    marginTop: 15,
    fontSize: 17,
  }

})