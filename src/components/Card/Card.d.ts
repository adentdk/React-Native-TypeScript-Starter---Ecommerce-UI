import {ViewProps} from 'react-native';

declare namespace ICard {
  export interface IProps {
    title?: string;
    description?: string;
    actionText?: string;
    onActionPress?: () => void;
    style?: ViewProps['style'];
  }
}

export {ICard};
