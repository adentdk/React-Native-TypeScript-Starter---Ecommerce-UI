import {palettes} from './palettes';
import {ITheme} from './theme';

export const lightTheme: ITheme.ITheme = {
  isDark: false,
  color: {
    primary: palettes.blueOcean,
    background: palettes.white,
    backgroundSecondary: palettes.offGrey,
    line: palettes.softGrey,
    text: palettes.navyBlack,
    input: palettes.offGrey,
    inputPlaceholder: palettes.halfGrey,
    inputLabel: palettes.darkGrey,
    dim: palettes.halfGrey,
    error: palettes.redVelvet,
    card: palettes.white,
  },
};

export default lightTheme;
