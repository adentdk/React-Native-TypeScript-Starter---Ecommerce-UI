import {StyleSheet} from 'react-native';
import {spacing} from '../../themes';

export const useStyles = () =>
  StyleSheet.create({
    root: {
      flexDirection: 'row',
      paddingVertical: spacing[4],
    },
    content: {
      flex: 1,
      marginRight: spacing[4],
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: spacing[2],
      resizeMode: 'cover',
    },
    descriptionText: {
      marginVertical: spacing[2],
    },
  });

export default useStyles;
