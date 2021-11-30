import * as React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IScreenWrapper} from './ScreenWrapper';

export const ScreenWrapper: React.FC<IScreenWrapper.IProps> = ({
  children,
  component = 'view',
  statusBarColor,
  statusBarStyle,
  statusBarHidden,
  style,
}) => {
  React.useLayoutEffect(() => {
    if (statusBarColor) {
      StatusBar.setBackgroundColor(statusBarColor);
    }
    if (statusBarStyle) {
      StatusBar.setBarStyle(statusBarStyle);
    }
    if (statusBarHidden) {
      StatusBar.setHidden(statusBarHidden);
    }
  }, [statusBarColor, statusBarHidden, statusBarStyle]);
  const Component = component === 'scroll' ? ScrollView : View;
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <Component style={style}>{children}</Component>
      </SafeAreaView>
    </>
  );
};
