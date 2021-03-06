import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare namespace ILogin {
  export interface IProps
    extends NativeStackScreenProps<
      INavigator.RootNavigatorParamList,
      'Login'
    > {}
}

export {ILogin};
