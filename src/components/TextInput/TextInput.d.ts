import {TextInputProps, ViewStyle} from 'react-native';

declare namespace ITextInput {
  interface IProps extends TextInputProps {
    label?: string;
    rightIcon?: string;
    rightIconOnPress?: () => void;
    leftIcon?: string;
    leftIconOnPress?: () => void;
    type?: 'default' | 'password' | 'email' | 'number';
    containerStyle?: ViewStyle;
  }
}
