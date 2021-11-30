import {TextProps} from 'react-native';
import {fonts, palettes} from '../../themes';

declare namespace IText {
  interface IProps extends TextProps {
    fontFamily?: keyof typeof fonts.family;
    fontSize?: keyof typeof fonts.size;
    align?: 'left' | 'center' | 'right';
    color?: ValueOf<typeof palettes>;
  }
}

export {IText};
