import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigation/TabNavigator.js";

const App = () => {
  return (
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
  );
}
export default App
