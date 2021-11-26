/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import {View} from 'react-native';
import Icon from '../components/Icon';
import spacing from '../themes/spacing';

const {Navigator, Screen} =
  createNativeStackNavigator<INavigator.RootNavigatorStackParamList>();

export const RootNavigator = () => {
  return (
    <Navigator>
      <Screen
        options={() => ({
          title: 'Mega Mall',
          headerTitleStyle: {
            fontFamily: 'DMSans-Bold',
          },
          headerTitleAlign: 'center',
          headerRight: () => {
            return (
              <View style={{flexDirection: 'row'}}>
                <Icon size={20} style={{marginRight: spacing[3]}} name="bell" />
                <Icon size={20} name="shopping-cart" />
              </View>
            );
          },
          headerShadowVisible: false,
        })}
        name="Home"
        component={HomeScreen}
      />
      <Screen name="Login" component={LoginScreen} />
    </Navigator>
  );
};

export default RootNavigator;
