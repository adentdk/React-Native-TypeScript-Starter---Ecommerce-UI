import React from 'react';
import {Pressable, View} from 'react-native';
import {useTheme} from '../../themes';
import {ICard} from './Card';
import {useStyles} from './styles';
import Text from '../Text';

export const Card: React.FC<ICard.IProps> = ({
  title,
  description,
  actionText,
  onActionPress,
  style,
  children,
  ...props
}) => {
  const {theme} = useTheme();
  const styles = useStyles(theme);
  return (
    <View style={[styles.root, style]} {...props}>
      <View style={styles.header}>
        <View>
          <Text fontFamily="medium" fontSize="lg">
            {title}
          </Text>
          {!!description && <Text>{description}</Text>}
        </View>
        <Pressable onPress={onActionPress}>
          <Text fontFamily="medium" fontSize="sm" color={theme.color.primary}>
            {actionText}
          </Text>
        </Pressable>
      </View>
      {children}
    </View>
  );
};

export default Card;
