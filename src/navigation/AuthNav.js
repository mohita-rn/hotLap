import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';

const Stack = createStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default AuthNav;
