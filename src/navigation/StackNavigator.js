import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SendSMSScreen from './screens/SendSMSScreen';
import AddPersonScreen from './screens/AddPersonScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SendSms" component={SendSMSScreen} />
      </Stack.Navigator>
    );
  }
  const ContactStackNavigator = () => {
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

export { MainStackNavigator, ContactStackNavigator };