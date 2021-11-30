import {StyleSheet} from 'react-native';
import {palettes, spacing} from '../../themes';
import {ITheme} from '../../themes/theme';
import {ofScreenWidth} from '../../utils/dimension';

export const useStyles = (theme: ITheme.ITheme) =>
  StyleSheet.create({
    container: {
      // flex: 1,
    },
    searchBar: {
      marginVertical: spacing[6],
      marginHorizontal: spacing[5],
    },
    carouselWrapper: {
      marginBottom: spacing[6],
      marginHorizontal: spacing[5],
      overflow: 'visible',
      flexWrap: 'nowrap',
    },
    carouselItem: {
      minWidth: ofScreenWidth(0.82),
      minHeight: 150,
      borderRadius: spacing[2],
      backgroundColor: palettes.redVelvet,
      marginRight: spacing[5],
    },
    carouselItemImage: {
      width: ofScreenWidth(0.82),
      height: 150,
      borderRadius: spacing[2],
      resizeMode: 'cover',
    },
    categoriesWrapper: {},
    categoryList: {
      marginBottom: spacing[6],
      marginHorizontal: spacing[3],
      overflow: 'visible',
      flexWrap: 'nowrap',
    },
    categoryItem: {
      width: 76,
      height: 80,
      marginRight: spacing[3],
      justifyContent: 'center',
      alignItems: 'center',
    },
    categoryIconWrapper: {
      width: 48,
      height: 48,
      borderRadius: spacing[2],
      alignItems: 'center',
      marginBottom: spacing[2],
      justifyContent: 'center',
    },
    mainSection: {
      backgroundColor: theme.color.card,
      marginBottom: spacing[3],
    },
    productSection: {
      backgroundColor: theme.color.backgroundSecondary,
      borderTopLeftRadius: spacing[4],
      borderTopRightRadius: spacing[4],
      paddingVertical: spacing[5],
    },
    productsWrapper: {
      marginBottom: spacing[5],
    },
    productCardItem: {
      marginRight: spacing[5],
    },
    productCardItemFirst: {
      marginLeft: spacing[5],
    },
    productPromotionCard: {
      marginBottom: spacing[5],
      marginHorizontal: spacing[5],
    },
    footer: {
      backgroundColor: theme.color.background,
      paddingVertical: spacing[5],
    },
    newsCardItem: {
      borderTopWidth: 0.75,
      borderTopColor: palettes.softGrey,
      marginHorizontal: spacing[5],
      marginBottom: spacing[3],
    },
    newsCardItemFirst: {
      borderTopWidth: 0,
    },
    outterButton: {
      marginHorizontal: spacing[5],
    },
  });

export default useStyles;
