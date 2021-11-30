import {StyleSheet} from 'react-native';
import {spacing} from '../../themes';
import {ITheme} from '../../themes/theme';

export const useStyles = (theme: ITheme.ITheme) =>
  StyleSheet.create({
    root: {
      justifyContent: 'flex-end',
    },
    content: {
      backgroundColor: theme.color.card,
      borderRadius: spacing[2],
    },
    header: {
      flexDirection: 'row',
      padding: spacing[5],
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: theme.color.line,
    },
    body: {
      paddingTop: spacing[6],
      paddingBottom: spacing[5],
      paddingHorizontal: spacing[5],
      justifyContent: 'center',
      alignItems: 'center',
    },
    wavingHand: {
      width: 50,
      height: 50,
      marginBottom: spacing[6],
    },
    spacing: {
      marginBottom: spacing[4],
    },
  });
