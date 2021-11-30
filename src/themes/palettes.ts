export const palettes = {
  blueOcean: '#3669C9',
  orangeFresh: '#FDA429',
  navyBlack: '#13181F',
  white: '#FFFFFF',
  earthGreen: '#3A9B7A',
  redVelvet: '#C93545',
  darkGrey: '#838589',
  halfGrey: '#838589',
  softGrey: '#EDEDED',
  offGrey: '#FAFAFA',
  offBlue: '#EFF5FB',
  offGreen: '#EEFAF6',
  offRed: '#FCECEF',
  dark: '#212121',
  offDark: '#2E2E2E',
};

export type Palette = typeof palettes[keyof typeof palettes];

export type Palettes = {
  [key in keyof typeof palettes]: Palette;
};
