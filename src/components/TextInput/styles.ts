import {StyleSheet} from 'react-native';
import {fonts, spacing} from '../../themes';
import {ITheme} from '../../themes/theme';

export const useStyles = (theme: ITheme.ITheme) =>
  StyleSheet.create({
    container: {
      borderRadius: spacing[2],
      backgroundColor: theme.color.input,
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
    },
    input: {
      flex: 1,
      paddingHorizontal: spacing[4],
      paddingVertical: spacing[3],
      fontSize: fonts.size.md,
      fontFamily: fonts.family.regular,
      color: theme.color.text,
      borderRadius: spacing[2],
    },
    label: {
      marginBottom: spacing[4],
    },
    icon: {
      paddingHorizontal: spacing[4],
    },
  });
