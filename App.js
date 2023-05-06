import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/FontAwesome'
import HomeScreen from './src/navigation/screens/HomeScreen.js';
import AddPersonScreen from './src/navigation/screens/AddPersonScreen.js'
import MyProvider from './src/context/provider.js'
import SendSMSScreen from './src/navigation/screens/SendSMSScreen.js';

const homeName = 'HomeScreen';
const personName = 'AddPersonScreen';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SendSMSScreen" component={SendSMSScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
function App() {
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
          <Tab.Screen name={personName} component={AddPersonScreen}

          />

        </Tab.Navigator>
      </NavigationContainer>
    </MyProvider>
  );
}

export default App;