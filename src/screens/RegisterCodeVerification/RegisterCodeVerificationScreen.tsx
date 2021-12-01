import {useFocusEffect} from '@react-navigation/core';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {View, KeyboardAvoidingView, BackHandler} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import DefaultButton from '../../components/DefaultButton';
import ScreenWrapper from '../../components/ScreenWrapper';
import Spacer from '../../components/Spacer';
import Text from '../../components/Text';
import {useTheme} from '../../themes';
import {IRegisterCodeVerification} from './RegisterCodeVerification';
import useStyles from './styles';

const CELL_COUNT = 5;

export const RegisterCodeVerificationScreen: React.FC<IRegisterCodeVerification.IProps> =
  ({navigation}) => {
    const [value, setValue] = React.useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });

    const {t} = useTranslation();
    const {theme} = useTheme();
    const styles = useStyles(theme);

    useFocusEffect(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          return true;
        },
      );

      return backHandler.remove;
    });

    const onContinuePress = () => {
      navigation.navigate('RegisterDetail');
    };

    return (
      <ScreenWrapper component="keyboardView" style={styles.root}>
        <KeyboardAvoidingView style={[styles.root, styles.container]}>
          <View style={styles.formWrapper}>
            <Text
              fontFamily="bold"
              fontSize="xxxxl"
              style={styles.spacingBottomText}>
              {t('Verification')}
            </Text>
            <Text
              color={theme.color.inputLabel}
              style={styles.spacingBottomText}>
              {t('We have sent a verification code to')}
            </Text>
            <CodeField
              ref={ref}
              {...props}
              caretHidden={false}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              autoFocus={true}
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />

            <Spacer />

            <View style={styles.spacingBottomText} />
            <DefaultButton
              style={styles.spacingBottomInput}
              title={t('Continue')}
              onPress={onContinuePress}
            />
          </View>
        </KeyboardAvoidingView>
      </ScreenWrapper>
    );
  };

export default RegisterCodeVerificationScreen;
