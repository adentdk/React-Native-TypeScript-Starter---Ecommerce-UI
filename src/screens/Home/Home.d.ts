import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare namespace IHome {
  export interface IProps
    extends NativeStackScreenProps<
      INavigator.RootNavigatorStackParamList,
      'Home'
    > {}
}

export {IHome};
