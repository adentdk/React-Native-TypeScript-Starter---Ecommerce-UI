import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {IHome} from './Home';

export const HomeScreen: React.FC<IHome.IProps> = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default HomeScreen;
