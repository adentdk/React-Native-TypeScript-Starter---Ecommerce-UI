import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import {Text, View} from 'react-native';

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
                <Text>halo</Text>
                <Text>hali</Text>
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

export default RootNavigator;
