import {StyleSheet} from 'react-native';
import {spacing} from '../../themes';

const useStyles = () =>
  StyleSheet.create({
    root: {
      paddingVertical: spacing[3],
      paddingHorizontal: spacing[5],
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: spacing[2],
    },
    content: {
      flex: 1,
    },
    contentFooter: {
      marginTop: spacing[2],
      flexDirection: 'row',
      alignItems: 'center',
    },
    arrowForwardIcon: {
      marginLeft: spacing[2],
    },
    image: {
      width: 125,
      height: 125,
      resizeMode: 'cover',
      alignSelf: 'flex-end',
    },
  });

export default useStyles;
