import React from 'react';
import {View} from 'react-native';

interface IProps {
  flex?: number;
}

export const Spacer: React.FC<IProps> = ({flex = 1}) => {
  return <View style={{flex}} />;
};

export default Spacer;
