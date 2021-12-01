import React from 'react';
import {TouchableOpacity} from 'react-native';
import {palettes, useTheme} from '../../themes';
import Text from '../Text';
import {IDefaultButton} from './DefaultButton';
import {useStyles} from './styles';

export const DefaultButton: React.FC<IDefaultButton.IProps> = ({
  title,
  onPress,
  color,
  titleColor,
  disabled = false,
  style,
}) => {
  const {theme} = useTheme();
  const styles = useStyles();

  const buttonColor = color || theme.color.primary;
  const titleColorValue = titleColor || palettes.white;
  return (
    <TouchableOpacity
      style={[
        styles.root,
        {backgroundColor: buttonColor},
        disabled && {backgroundColor: theme.color.dim},
        style,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text fontFamily="medium" color={titleColorValue}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
