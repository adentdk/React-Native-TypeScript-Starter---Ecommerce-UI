import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {fonts, palettes} from '../../themes';
import Text from '../Text';
import {IProductPromotionCard} from './ProductPromotionCard';
import useStyles from './styles';

export const ProductPromotionCard: React.FC<IProductPromotionCard.IProps> = ({
  image,
  title,
  color = palettes.earthGreen,
  style,
}) => {
  const styles = useStyles();
  const {t} = useTranslation('common');
  return (
    <View style={[styles.root, {backgroundColor: color}, style]}>
      <View style={styles.content}>
        <Text fontFamily="bold" fontSize="xxl" color={palettes.white}>
          {title}
        </Text>

        <View style={styles.contentFooter}>
          <Text fontFamily="medium" color={palettes.softGrey}>
            {t('Shop Now')}
          </Text>
          <IonIcon
            style={styles.arrowForwardIcon}
            name="arrow-forward"
            size={fonts.size.xxl}
            color={palettes.white}
          />
        </View>
      </View>
      <View style={[styles.content]}>
        <Image source={image} style={styles.image} />
      </View>
    </View>
  );
};

export default ProductPromotionCard;
