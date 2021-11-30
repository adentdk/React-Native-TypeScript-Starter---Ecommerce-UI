import {ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';

declare namespace IProductCard {
  export interface IProps {
    id: string | number;
    image: ImageSourcePropType;
    name: string;
    price: number;
    rating: number;
    totalReviews: number;
    style?: StyleProp<ViewStyle>;
  }
}
