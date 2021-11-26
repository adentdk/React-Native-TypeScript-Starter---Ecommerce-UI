import React from 'react';
import {Pressable} from 'react-native';
import SvgIcon from 'react-native-svg-icon';
import {IIcon} from './Icon';
import svgs from './svgs';

const Icon = ({size, height, width, onPress, ...props}: IIcon.IProps) => (
  <Pressable onPress={onPress}>
    <SvgIcon
      {...props}
      width={size || width}
      height={size || height}
      svgs={svgs}
      defaultViewBox="0 0 24 24"
    />
  </Pressable>
);

export default Icon;
