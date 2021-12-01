import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {View, KeyboardAvoidingView, Pressable} from 'react-native';
import DefaultButton from '../../components/DefaultButton';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import Text from '../../components/Text';
import TextInput from '../../components/TextInput';
import {useTheme} from '../../themes';
import {IRegister} from './Register';
import useStyles from './styles';

export const RegisterScreen: React.FC<IRegister.IProps> = ({navigation}) => {
  const {t} = useTranslation();
  const {theme} = useTheme();
  const styles = useStyles();

  const onLoginPress = () => {
    navigation.navigate('Login');
  };

  const onContinuePress = () => {
    navigation.navigate('RegisterCodeVerification');
  };

  return (
    <ScreenWrapper component="keyboardView" style={styles.root}>
      <KeyboardAvoidingView style={[styles.root, styles.container]}>
        <View style={styles.formWrapper}>
          <Text
            fontFamily="bold"
            fontSize="xxxxl"
            style={styles.spacingBottomText}>
            {t('Register Account')}
          </Text>
          <Text color={theme.color.inputLabel} style={styles.spacingBottomText}>
            {t('Please enter your email / phone to register')}
          </Text>
          <TextInput
            placeholder={t('Enter your email address / phone number')}
            label="Email/Phone"
            type="email"
            containerStyle={styles.spacingBottomInput}
          />
          <Spacer />

          <View style={styles.spacingBottomText} />
          <DefaultButton title={t('Continue')} onPress={onContinuePress} />
        </View>
        <View style={styles.footer}>
          <Text fontFamily="medium">{t('Have an Account?')}</Text>
          <Pressable onPress={onLoginPress}>
            <Text
              fontFamily="medium"
              color={theme.color.primary}
              style={styles.textLink}>
              {t('Login')}
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default RegisterScreen;
