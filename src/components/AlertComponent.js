import { Alert } from "react-native";
export function AlertComponent(title, message) {
    Alert.alert(
        title,
        message,
        [
          {
            text: 'OK',
            style: 'cancel'
          }
        ],
        { cancelable: false }
      );
}