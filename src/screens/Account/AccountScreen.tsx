import * as React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import Text from '../../components/Text';
import {IAccount} from './Account';

export const AccountScreen: React.FC<IAccount.IProps> = () => {
  return (
    <ScreenWrapper>
      <Text>Account</Text>
    </ScreenWrapper>
  );
};

export default AccountScreen;
