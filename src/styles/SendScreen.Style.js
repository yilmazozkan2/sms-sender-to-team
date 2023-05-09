import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
  img_background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})