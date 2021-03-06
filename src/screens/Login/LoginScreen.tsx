import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {View, KeyboardAvoidingView, Pressable} from 'react-native';
import DefaultButton from '../../components/DefaultButton';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import Text from '../../components/Text';
import TextInput from '../../components/TextInput';
import {useTheme} from '../../themes';
import {ILogin} from './Login';
import useStyles from './styles';

export const LoginScreen: React.FC<ILogin.IProps> = ({navigation}) => {
  const {t} = useTranslation();
  const {theme} = useTheme();
  const styles = useStyles();

  const onRegisterPress = () => {
    navigation.navigate('Register');
  };

  return (
    <ScreenWrapper component="keyboardView" style={styles.root}>
      <KeyboardAvoidingView style={[styles.root, styles.container]}>
        <View style={styles.formWrapper}>
          <Text
            fontFamily="bold"
            fontSize="xxxxl"
            style={styles.spacingBottomText}>
            {t('Welcome back to\nMega Mall')}
          </Text>
          <Text color={theme.color.inputLabel} style={styles.spacingBottomText}>
            {t('Please login to your account')}
          </Text>
          <TextInput
            placeholder={t('Enter your email address / phone number')}
            label="Email/Phone"
            type="email"
            containerStyle={styles.spacingBottomInput}
          />
          <TextInput
            placeholder={t('Enter your password')}
            label="Password"
            type="password"
            containerStyle={styles.spacingBottomInput}
          />
          <View style={styles.spacingBottomText} />
          <DefaultButton title={t('Login')} disabled={true} />
        </View>
        <Spacer />
        <View style={styles.footer}>
          <Text fontFamily="medium">{t('Forgot password')}</Text>
          <Pressable onPress={onRegisterPress}>
            <Text fontFamily="medium" color={theme.color.primary}>
              {t('Register')}
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default LoginScreen;
