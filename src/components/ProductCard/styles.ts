import {StyleSheet} from 'react-native';
import {spacing} from '../../themes';
import {ITheme} from '../../themes/theme';

export const useStyles = (theme: ITheme.ITheme) =>
  StyleSheet.create({
    productCard: {
      width: 170,
      minHeight: 240,
      backgroundColor: theme.color.card,
      paddingHorizontal: spacing[3],
      paddingVertical: spacing[4],
      borderRadius: spacing[2],
    },
    productCardImageWrapper: {
      flex: 1,
      marginBottom: spacing[4],
    },
    productCardImage: {
      minWidth: 130,
      minHeight: 125,
      resizeMode: 'cover',
      backgroundColor: theme.color.background,
    },
    productCardFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: spacing[2],
    },
    productCardFooterReview: {
      flex: 1,
      marginLeft: spacing[2],
    },
  });
