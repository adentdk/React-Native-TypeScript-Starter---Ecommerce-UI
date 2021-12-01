/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import {View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import spacing from '../themes/spacing';
import {fonts, useTheme} from '../themes';

const {Navigator, Screen} =
  createNativeStackNavigator<INavigator.HomeNavigatorStackParamList>();

export const HomeNavigator = () => {
  const {toggleTheme, theme} = useTheme();
  return (
    <Navigator>
      <Screen
        options={() => ({
          title: 'Mega Mall',
          headerTitleStyle: {
            fontFamily: fonts.family.bold,
            fontSize: fonts.size.xl,
            color: theme.color.primary,
          },
          headerTitleAlign: 'center',
          headerRight: ({tintColor}) => {
            return (
              <View style={{flexDirection: 'row'}}>
                <IonIcon
                  color={tintColor}
                  size={24}
                  style={{marginRight: spacing[3]}}
                  name="notifications-outline"
                />
                <IonIcon
                  color={tintColor}
                  onPress={toggleTheme}
                  size={24}
                  name="cart-outline"
                />
              </View>
            );
          },
        })}
        name="Home"
        component={HomeScreen}
      />
      <Screen name="Login" component={LoginScreen} />
    </Navigator>
  );
};

export default HomeNavigator;
