import {StyleSheet} from 'react-native';
import {spacing} from '../../themes';
import {ITheme} from '../../themes/theme';

export const useStyles = (theme: ITheme.ITheme) =>
  StyleSheet.create({
    root: {
      maxWidth: '100%',
      backgroundColor: theme.color.background,
      paddingVertical: spacing[4],
      paddingHorizontal: spacing[3],
      borderWidth: 1,
      borderRadius: spacing[2],
      borderColor: theme.color.text,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {},
  });
