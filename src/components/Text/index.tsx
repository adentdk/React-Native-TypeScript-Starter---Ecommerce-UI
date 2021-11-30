import React from 'react';
import {Text as RNText} from 'react-native';
import {fonts, useTheme} from '../../themes';
import {IText} from './Text';

export const Text: React.FC<IText.IProps> = ({
  children,
  style,
  fontFamily = 'regular',
  fontSize = 'md',
  color,
  align = 'left',
  ...props
}) => {
  const {theme} = useTheme();
  const fontColor = color || theme.color.text;
  return (
    <RNText
      style={[
        {
          fontFamily: fonts.family[fontFamily],
          fontSize: fonts.size[fontSize],
          textAlign: align,
          color: fontColor,
        },
        style,
      ]}
      {...props}>
      {children}
    </RNText>
  );
};

export default Text;
