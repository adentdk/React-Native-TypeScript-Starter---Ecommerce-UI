import {Dimensions} from 'react-native';

const screenDimensions = Dimensions.get('screen');

export const screenWidth = screenDimensions.width;
export const screenHeight = screenDimensions.height;

export const ofScreenWidth = (percent: number) => screenWidth * percent;
export const ofScreenHeight = (percent: number) => screenHeight * percent;
