import {ImageSourcePropType, ViewProps} from 'react-native';

declare namespace INewsCard {
  export interface IProps {
    title: string;
    description: string;
    image: ImageSourcePropType;
    timestamp: string;
    onPress?: () => void;
    style?: ViewProps['style'];
  }
}
