import {StyleSheet} from 'react-native';
import {spacing} from '../../themes';

export const useStyles = () =>
  StyleSheet.create({
    root: {
      width: '100%',
      paddingVertical: spacing[4],
      paddingHorizontal: spacing[3],
      borderRadius: spacing[2],
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {},
  });
