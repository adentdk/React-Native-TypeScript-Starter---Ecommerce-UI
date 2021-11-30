import React from 'react';
import {Image, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import {useTranslation} from 'react-i18next';

import WavingHandImage from '../../assets/images/waving-hand.png';

import {fonts, useTheme} from '../../themes';
import Text from '../Text';
import {useStyles} from './styles';
import DefaultButton from '../DefaultButton';

export const MustLoginModal = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(true);
  const closeModal = () => setIsModalVisible(false);
  const {t} = useTranslation();

  const {theme} = useTheme();
  const styles = useStyles(theme);
  return (
    <Modal
      style={styles.root}
      isVisible={isModalVisible}
      onDismiss={closeModal}
      onBackdropPress={closeModal}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text fontFamily="bold" fontSize="lg">
            {t('Login Account')}
          </Text>
          <IonIcon name="close" color={theme.color.text} size={fonts.size.xl} />
        </View>
        <View style={styles.body}>
          <Image source={WavingHandImage} style={styles.wavingHand} />
          <Text fontFamily="medium" fontSize="lg">
            {t('You need to login first')}
          </Text>
          <View style={styles.spacing} />
          <Text color={theme.color.dim} align="center">
            {t('Please login/register first to make a transaction')}
          </Text>
          <View style={styles.spacing} />
          <DefaultButton title="Login" />
        </View>
      </View>
    </Modal>
  );
};

export default MustLoginModal;
