import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import React from 'react';
import {useTheme} from '../themes';
import RootNavigator from './RootNavigator';

export const AppNavigator = () => {
  const {theme} = useTheme();
  const isDark = theme.isDark;

  let navigationTheme: Theme;

  if (isDark) {
    navigationTheme = {
      dark: true,
      colors: {
        ...DarkTheme.colors,
        ...theme.color,
      },
    };
  } else {
    navigationTheme = {
      dark: false,
      colors: {
        ...DefaultTheme.colors,
        ...theme.color,
      },
    };
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};
