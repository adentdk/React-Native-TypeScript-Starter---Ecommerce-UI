import {StyleSheet} from 'react-native';
import {spacing} from '../../themes';

export const useStyles = () =>
  StyleSheet.create({
    root: {
      height: '100%',
    },
    container: {
      paddingHorizontal: spacing[5],
    },
    formWrapper: {
      marginTop: spacing[9],
    },
    spacingBottomText: {
      marginBottom: spacing[5] - 5,
    },
    spacingBottomInput: {
      marginBottom: spacing[6],
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: spacing[6],
      marginHorizontal: spacing[2],
    },
  });

export default useStyles;
