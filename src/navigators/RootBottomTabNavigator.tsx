import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AccountScreen from '../screens/Account/AccountScreen';
import OnProgressScreen from '../screens/OnProgress';
import {useAppSelector} from '../store/hooks';
import {fonts, useTheme} from '../themes';
import MainNavigator from './MainNavigator';

const Tab = createBottomTabNavigator<INavigator.RootTabNavigatorParamList>();

function RootBottomTabNavigator() {
  const {theme} = useTheme();
  const token = useAppSelector(state => state.auth.token);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.color.primary,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontFamily: fonts.family.medium,
          fontSize: fonts.size.xs,
          textTransform: 'uppercase',
        },
      }}>
      <Tab.Screen
        name="Main"
        options={{
          headerShown: false,
          tabBarLabel: 'home',
          tabBarIcon: ({color, size}) => (
            <IonIcon name="home-outline" color={color} size={size} />
          ),
        }}
        component={MainNavigator}
      />
      <Tab.Screen
        name="Wishlist"
        options={{
          tabBarLabel: 'wishlist',
          title: 'Wishlist',
          tabBarIcon: ({color, size}) => (
            <IonIcon name="heart-outline" color={color} size={size} />
          ),
        }}
        component={OnProgressScreen}
      />
      <Tab.Screen
        name="Orders"
        options={{
          tabBarLabel: 'orders',
          title: 'Orders',
          tabBarIcon: ({color, size}) => (
            <IonIcon name="basket-outline" color={color} size={size} />
          ),
        }}
        component={OnProgressScreen}
      />
      <Tab.Screen
        name="Account"
        options={({navigation}) => ({
          tabBarButton: tabProps => (
            <TouchableOpacity
              {...tabProps}
              onPress={() => {
                if (!token) {
                  navigation.navigate('Login');
                } else {
                  navigation.navigate('Account');
                }
              }}
            />
          ),
          tabBarLabel: !token ? 'login' : 'account',
          tabBarIcon: ({color, size}) => (
            <IonIcon name="person-outline" color={color} size={size} />
          ),
        })}
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
}

export default RootBottomTabNavigator;
