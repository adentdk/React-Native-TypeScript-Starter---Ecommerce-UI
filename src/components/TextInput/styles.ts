import {StyleSheet} from 'react-native';
import {fonts, spacing} from '../../themes';
import {ITheme} from '../../themes/theme';

export const useStyles = (theme: ITheme.ITheme) =>
  StyleSheet.create({
    container: {
      height: 50,
      paddingHorizontal: spacing[4],
      borderRadius: spacing[2],
      backgroundColor: theme.color.input,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      paddingHorizontal: 0,
      paddingVertical: spacing[4],
      fontSize: fonts.size.md,
      fontFamily: fonts.family.regular,
      color: theme.color.text,
    },
  });
