import {palettes} from './palettes';
import {ITheme} from './theme';

export const darkTheme: ITheme.ITheme = {
  isDark: true,
  color: {
    primary: palettes.blueOcean,
    background: palettes.dark,
    backgroundSecondary: palettes.offDark,
    line: palettes.halfGrey,
    text: palettes.white,
    input: palettes.offDark,
    inputPlaceholder: palettes.halfGrey,
    inputLabel: palettes.darkGrey,
    dim: palettes.halfGrey,
    error: palettes.redVelvet,
    card: palettes.dark,
  },
};

export default darkTheme;
