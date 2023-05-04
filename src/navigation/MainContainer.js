import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeScreen from './screens/HomeScreen'
import PersonScreen from './screens/PersonScreen'
import MyProvider from '../context/provider'

const homeName = 'HomeScreen';
const personName = 'PersonScreen';
const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <MyProvider>
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === homeName) {
                            iconName = focused
                                ? 'home'
                                : 'home';
                        } else if (route.name === personName) {
                            iconName = focused ? 'cog' : 'cog';
                        }

                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name={homeName} component={HomeScreen} options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={26} />
                    ),
                }} />
                <Tab.Screen name={personName} component={PersonScreen}

                />

            </Tab.Navigator>
        </NavigationContainer>
        </MyProvider>
    );
}