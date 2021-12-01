import {StyleSheet} from 'react-native';
import {fonts, spacing} from '../../themes';
import {ITheme} from '../../themes/theme';

export const useStyles = (theme: ITheme.ITheme) =>
  StyleSheet.create({
    root: {
      height: '100%',
    },
    container: {
      paddingHorizontal: spacing[5],
    },
    formWrapper: {
      marginTop: spacing[9],
      flex: 1,
    },
    spacingBottomText: {
      marginBottom: spacing[5] - 5,
    },
    spacingBottomInput: {
      marginBottom: spacing[6],
    },
    codeFieldRoot: {marginTop: 20},
    cell: {
      width: 40,
      height: 40,
      lineHeight: 40,
      fontSize: fonts.size.md,
      fontFamily: fonts.family.medium,
      textAlign: 'center',
      borderBottomWidth: 0.7,
      borderBottomColor: theme.color.dim,
    },
    focusCell: {
      borderBottomColor: theme.color.primary,
      borderBottomWidth: 1,
    },
  });

export default useStyles;
