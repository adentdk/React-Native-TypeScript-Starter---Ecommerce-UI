/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import {View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import spacing from '../themes/spacing';
import {useTheme} from '../themes';
import {defaultNativeStackNavigationOptions} from './defaultConfig';

const {Navigator, Screen} =
  createNativeStackNavigator<INavigator.MainNavigatorParamList>();

export const MainNavigator = () => {
  const {toggleTheme, theme} = useTheme();
  const defaultOptions = defaultNativeStackNavigationOptions(theme);
  return (
    <Navigator>
      <Screen
        options={() => ({
          ...defaultOptions,
          headerTitleStyle: Object.assign(defaultOptions.headerTitleStyle, {
            color: theme.color.primary,
          }),
          title: 'Mega Mall',
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
    </Navigator>
  );
};

export default MainNavigator;
