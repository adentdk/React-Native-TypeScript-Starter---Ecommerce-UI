import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare namespace IHome {
  export interface IProps
    extends NativeStackScreenProps<INavigator.MainNavigatorParamList, 'Home'> {
    t: (key: string) => string;
    i18n: any;
  }
}

export {IHome};
