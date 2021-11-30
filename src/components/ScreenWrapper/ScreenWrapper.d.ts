import {
  ColorValue,
  StatusBarAnimation,
  StatusBarStyle,
  ViewStyle,
} from 'react-native';

declare namespace IScreenWrapper {
  interface IProps {
    statusBarColor?: ColorValue;
    statusBarStyle?: StatusBarStyle;
    statusBarHidden?: boolean;
    statusBarAnimation?: StatusBarAnimation;
    component?: 'scroll' | 'view';
    style?: ViewStyle;
  }
}

export {IScreenWrapper};
