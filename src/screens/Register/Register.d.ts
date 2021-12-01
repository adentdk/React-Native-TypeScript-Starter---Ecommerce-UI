import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare namespace IRegister {
  export interface IProps
    extends NativeStackScreenProps<
      INavigator.RootNavigatorParamList,
      'Register'
    > {}
}

export {IRegister};
