import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddPersonScreen from './screens/AddPersonScreen';
import SendScreen from './screens/SendScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SendSMS" component={SendScreen} />
      </Stack.Navigator>
    );
  }
  const AddPersonStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="AddPerson" component={AddPersonScreen} />
      </Stack.Navigator>
    );
  }
  
const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

export { MainStackNavigator, AddPersonStackNavigator };