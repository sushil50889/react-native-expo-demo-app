import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/authScreens/login';
import RegisterScreen from '../screens/authScreens/register';
import ForgotPassScreen from '../screens/authScreens/forgotPassword';

  
  const authStack = createStackNavigator();
  
  function authStackScreens() {
    return (
        <authStack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <authStack.Screen name="Login" component={LoginScreen} />
          <authStack.Screen name="Register" component={RegisterScreen} />
          <authStack.Screen name="ForgotPass" component={ForgotPassScreen} />
        </authStack.Navigator>
    );
  }
  
  export default authStackScreens;