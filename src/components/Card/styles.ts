import {StyleSheet} from 'react-native';
import {spacing} from '../../themes';
import {ITheme} from '../../themes/theme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = (theme: ITheme.ITheme) =>
  StyleSheet.create({
    root: {
      // flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: spacing[5],
      marginBottom: spacing[4],
    },
  });
