import React from 'react';
import {Image, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {fonts, palettes, useTheme} from '../../themes';
import {toRupiah} from '../../utils/currency';
import Text from '../Text';
import {IProductCard} from './ProductCard';
import {useStyles} from './styles';

export const ProductCard: React.FC<IProductCard.IProps> = ({
  id,
  name,
  price,
  image,
  totalReviews,
  rating,
  style,
}) => {
  const {theme} = useTheme();
  const styles = useStyles(theme);
  return (
    <View key={id} style={[styles.productCard, style]}>
      <View style={styles.productCardImageWrapper}>
        <Image source={image} style={styles.productCardImage} />
      </View>
      <View>
        <Text fontFamily="medium">{name}</Text>
        <Text fontFamily="bold" fontSize="sm" color={palettes.redVelvet}>
          {toRupiah(price)}
        </Text>
        <View style={styles.productCardFooter}>
          <Text fontSize="xs">
            <IonIcon
              size={fonts.size.sm}
              name="star"
              color={palettes.orangeFresh}
            />
            {rating}
          </Text>

          <View style={styles.productCardFooterReview}>
            <Text fontSize="xs">{totalReviews} reviews</Text>
          </View>
          <IonIcon
            color={theme.color.text}
            size={fonts.size.md}
            name="ellipsis-vertical"
          />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
