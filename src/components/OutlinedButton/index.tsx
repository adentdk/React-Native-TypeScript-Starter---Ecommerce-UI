import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '../../themes';
import Text from '../Text';
import {IOutlinedButton} from './OutlinedButton';
import {useStyles} from './styles';

export const OutlinedButton: React.FC<IOutlinedButton.IProps> = ({
  title,
  onPress,
  color,
  disabled = false,
  style,
}) => {
  const {theme} = useTheme();
  const styles = useStyles(theme);
  return (
    <TouchableOpacity
      style={[styles.root, color !== undefined && {borderColor: color}, style]}
      onPress={onPress}
      disabled={disabled}>
      <Text fontFamily="medium" color={color}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default OutlinedButton;
