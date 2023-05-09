import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, AddPersonStackNavigator } from "./StackNavigator";
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome'

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      
      screenOptions={({ route }) => ({
        headerShown:false,
        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'AddPerson') {
            iconName = focused ? 'cog' : 'cog';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle:{
          height: 75

        },
        tabBarIconStyle:{
          marginTop: 5
        },
        tabBarLabelStyle:{
          marginBottom: 10,
          fontSize: 15,
          color: 'black',
          fontWeight: 'bold'
        }
      })}

    >
      <Tab.Screen name="Home" component={MainStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen name="AddScreen" component={AddPersonStackNavigator}
      options={{
        tabBarLabel: 'Add',
        tabBarIcon: ({ color }) => (
          <Icon name="user" color={color} size={35} />
        ),
        
      }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;