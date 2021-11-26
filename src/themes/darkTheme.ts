import {shadeColor} from '../utils/color';
import {palettes} from './palettes';

export default {
  isDark: true,
  palettes,
  color: {
    primary: shadeColor(palettes.blueOcean, -10),
    background: palettes.dark,
    line: palettes.halfGrey,
    text: palettes.navyBlack,
    input: palettes.offDark,
    inputPlaceholder: palettes.halfGrey,
    inputLabel: palettes.darkGrey,
    dim: palettes.halfGrey,
    error: palettes.redVelvet,
  },
};
