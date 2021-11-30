import React from 'react';
import {Image, View} from 'react-native';
import {useTheme} from '../../themes';
import Text from '../Text';
import {INewsCard} from './NewsCard';
import useStyles from './styles';

export const NewsCard: React.FC<INewsCard.IProps> = ({
  title,
  description,
  image,
  timestamp,
  style,
}) => {
  const {theme} = useTheme();
  const styles = useStyles();
  return (
    <View style={[styles.root, style]}>
      <View style={styles.content}>
        <Text fontFamily="medium">{title}</Text>
        <Text style={styles.descriptionText} fontSize="sm">
          {description}
        </Text>
        <Text fontSize="sm" color={theme.color.dim}>
          {timestamp}
        </Text>
      </View>
      <Image source={image} style={styles.image} />
    </View>
  );
};

export default NewsCard;
