import { StyleSheet, Dimensions } from "react-native";
export default StyleSheet.create({
  img_background: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})