import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import Text from '../../components/Text';

export const RegisterDetailScreen = () => {
  const {t} = useTranslation(['RegisterDetailScreen', 'common']);
  return (
    <ScreenWrapper>
      <View>
        <Text>{t('Profile & Password')}</Text>
        <Text>
          {t(
            'Complete the following latest data to enter the Mega Mall application',
          )}
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default RegisterDetailScreen;
