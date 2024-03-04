import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNav from './AuthNav';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

const MainNav = () => {
  return (
    <Stack.Navigator initialRouteName='SplashScreen'>
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Auth" component={AuthNav} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainNav;
