import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import OnProgressScreen from '../screens/OnProgress';
import {fonts, useTheme} from '../themes';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

function RootBottomTabNavigator() {
  const {theme} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.color.primary,
        tabBarHideOnKeyboard: true,
        headerShadowVisible: false,
        tabBarLabelStyle: {
          fontFamily: fonts.family.medium,
          fontSize: fonts.size.xs,
          textTransform: 'uppercase',
        },
      }}>
      <Tab.Screen
        name="MainStack"
        options={{
          headerShown: false,
          tabBarLabel: 'home',
          tabBarIcon: ({color, size}) => (
            <IonIcon name="home-outline" color={color} size={size} />
          ),
        }}
        component={HomeNavigator}
      />
      <Tab.Screen
        name="WistList"
        options={{
          tabBarLabel: 'wistlist',
          tabBarIcon: ({color, size}) => (
            <IonIcon name="heart-outline" color={color} size={size} />
          ),
        }}
        component={OnProgressScreen}
      />
      <Tab.Screen
        name="OrderStack"
        options={{
          tabBarLabel: 'order',
          tabBarIcon: ({color, size}) => (
            <IonIcon name="basket-outline" color={color} size={size} />
          ),
        }}
        component={OnProgressScreen}
      />
      <Tab.Screen
        name="Account"
        options={{
          tabBarLabel: 'login',
          tabBarIcon: ({color, size}) => (
            <IonIcon name="person-outline" color={color} size={size} />
          ),
        }}
        component={OnProgressScreen}
      />
    </Tab.Navigator>
  );
}

export default RootBottomTabNavigator;
