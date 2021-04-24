import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native'
import OnboardScreen from './src/screens/OnboardScreen'
import Login from './src/screens/LoginScreen';
import Signup from './src/screens/SignupScreen';
import Feed from './src/screens/Feed';
const App = () => {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='onboard' component={OnboardScreen} options={{ title: 'Lets Start' }} />
        <Stack.Screen name='login' component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name='signup' component={Signup} options={{ title: 'Signup' }} />
        <Stack.Screen name='Feed' component={Feed} options={{ title: 'All Users' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
