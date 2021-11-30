import {ViewProps} from 'react-native';

declare namespace IDefaultButton {
  export interface IProps {
    title: string;
    onPress?: () => void;
    color?: string;
    titleColor?: string;
    disabled?: boolean;
    style?: ViewProps['style'];
  }
}

export {IDefaultButton};
