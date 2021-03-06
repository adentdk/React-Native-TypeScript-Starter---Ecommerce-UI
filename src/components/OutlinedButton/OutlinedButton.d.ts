import {ViewProps} from 'react-native';

declare namespace IOutlinedButton {
  export interface IProps {
    title: string;
    onPress?: () => void;
    color?: string;
    disabled?: boolean;
    style?: ViewProps['style'];
  }
}

export {IOutlinedButton};
