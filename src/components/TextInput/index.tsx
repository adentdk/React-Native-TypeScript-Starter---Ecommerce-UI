import * as React from 'react';
import {Pressable, TextInput as RNTextInput} from 'react-native';
import {useTheme} from '../../themes';
import {useStyles} from './styles';
import {ITextInput} from './TextInput';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const TextInput = React.forwardRef<RNTextInput, ITextInput.IProps>(
  (
    {
      // label,
      // leftIcon,
      // leftIconOnPress,
      // rightIcon,
      // rightIconOnPress,
      // type,
      containerStyle,
      style,
      ...props
    },
    ref,
  ) => {
    const {theme} = useTheme();
    const styles = useStyles(theme);

    return (
      <Pressable style={[styles.container, containerStyle]}>
        <RNTextInput
          style={[styles.input, style]}
          placeholderTextColor={theme.color.inputPlaceholder}
          {...props}
          ref={ref}
        />
        <IonIcon size={24} color={theme.color.text} name="search" />
      </Pressable>
    );
  },
);

export default TextInput;
