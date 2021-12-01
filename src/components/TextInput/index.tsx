import * as React from 'react';
import {Pressable, TextInput as RNTextInput} from 'react-native';
import {spacing, useTheme} from '../../themes';
import {useStyles} from './styles';
import {ITextInput} from './TextInput';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Text from '../Text';
import useToggleState from '../../hooks/useToggleState';

export const TextInput = React.forwardRef<RNTextInput, ITextInput.IProps>(
  (
    {
      label,
      leftIcon,
      leftIconOnPress,
      rightIcon,
      rightIconOnPress,
      type,
      containerStyle,
      style,
      secureTextEntry,
      keyboardType,
      ...props
    },
    ref,
  ) => {
    const [hidePassword, toggleHidePassword] = useToggleState(true);

    const {theme} = useTheme();
    const styles = useStyles(theme);

    const hasRightIcon = !!rightIcon || type === 'password';
    const hasLeftIcon = !!leftIcon;

    return (
      <>
        {label && <Text style={styles.label}>{label}</Text>}
        <Pressable style={[styles.container, containerStyle]}>
          {leftIcon !== undefined && (
            <IonIcon
              style={styles.icon}
              size={24}
              color={theme.color.text}
              name={leftIcon}
              onPress={leftIconOnPress}
            />
          )}
          <RNTextInput
            style={[
              styles.input,
              hasLeftIcon && {paddingLeft: spacing[0]},
              hasRightIcon && {paddingRight: spacing[0]},
              style,
            ]}
            placeholderTextColor={theme.color.inputPlaceholder}
            {...props}
            ref={ref}
            secureTextEntry={
              type === 'password' ? hidePassword : secureTextEntry
            }
            keyboardType={
              keyboardType !== undefined
                ? keyboardType
                : type === 'email'
                ? 'email-address'
                : 'default'
            }
          />
          {rightIcon !== undefined && (
            <IonIcon
              style={styles.icon}
              size={24}
              color={theme.color.text}
              name={rightIcon}
              onPress={rightIconOnPress}
            />
          )}
          {type === 'password' && (
            <IonIcon
              style={styles.icon}
              size={24}
              color={theme.color.dim}
              name={hidePassword ? 'eye-off' : 'eye'}
              onPress={toggleHidePassword}
            />
          )}
        </Pressable>
      </>
    );
  },
);

export default TextInput;
