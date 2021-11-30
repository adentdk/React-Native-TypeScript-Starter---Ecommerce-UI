import {ViewProps, ImageSourcePropType} from 'react-native';

declare namespace IProductPromotionCard {
  export interface IProps {
    id?: string | number;
    title: string;
    image: ImageSourcePropType;
    onPress?: () => void;
    style?: ViewProps['style'];
    color?: string;
  }
}

export {IProductPromotionCard};
