import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import RegisterCodeVerificationScreen from '../screens/RegisterCodeVerification/RegisterCodeVerificationScreen';
import RegisterDetailScreen from '../screens/RegisterDetail/RegisterDetailScreen';
import {useTheme} from '../themes';
import {defaultNativeStackNavigationOptions} from './defaultConfig';
import RootBottomTabNavigator from './RootBottomTabNavigator';

const Stack = createNativeStackNavigator<INavigator.RootNavigatorParamList>();

export const RootNavigator = () => {
  const {theme} = useTheme();

  const defaultOptions = defaultNativeStackNavigationOptions(theme);
  return (
    <Stack.Navigator initialRouteName="App">
      <Stack.Screen
        name="App"
        options={{
          headerShown: false,
        }}
        component={RootBottomTabNavigator}
      />
      <Stack.Screen
        options={{
          ...defaultOptions,
          headerShadowVisible: false,
          title: '',
        }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          ...defaultOptions,
          headerShadowVisible: false,
          title: '',
        }}
        name="Register"
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{
          ...defaultOptions,
          headerShadowVisible: false,
          title: '',
          headerBackVisible: false,
        }}
        name="RegisterCodeVerification"
        component={RegisterCodeVerificationScreen}
      />
      <Stack.Screen
        options={{
          ...defaultOptions,
          headerShadowVisible: false,
          title: '',
          headerBackVisible: false,
        }}
        name="RegisterDetail"
        component={RegisterDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
