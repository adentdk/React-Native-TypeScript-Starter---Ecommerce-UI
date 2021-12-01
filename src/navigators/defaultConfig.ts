import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {fonts} from '../themes';
import {ITheme} from '../themes/theme';

export const defaultNativeStackNavigationOptions = (
  theme: ITheme.ITheme,
): NativeStackNavigationOptions => ({
  headerTitleStyle: {
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.xl,
    color: theme.color.text,
  },
  headerTitleAlign: 'center',
  headerBackImageSource: {
    ...IonIcon.getImageSourceSync(
      'chevron-back',
      fonts.size.xxxxl,
      theme.color.text,
    ),
    width: fonts.size.xxxxl,
    height: fonts.size.xxxxl,
  },
  // headerBackTitleVisible: true,
});
