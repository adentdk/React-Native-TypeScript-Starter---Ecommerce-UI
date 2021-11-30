import {darkerColor} from '../utils/color';
import {palettes} from './palettes';
import {ITheme} from './theme';

export const darkTheme: ITheme.ITheme = {
  isDark: true,
  color: {
    primary: darkerColor(palettes.blueOcean, 0.3),
    background: palettes.dark,
    backgroundSecondary: palettes.offDark,
    line: palettes.halfGrey,
    text: palettes.navyBlack,
    input: palettes.offDark,
    inputPlaceholder: palettes.halfGrey,
    inputLabel: palettes.darkGrey,
    dim: palettes.halfGrey,
    error: palettes.redVelvet,
    card: palettes.dark,
  },
};

export default darkTheme;
