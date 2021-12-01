import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare namespace IRegisterCodeVerification {
  interface IProps
    extends NativeStackScreenProps<
      INavigator.RootNavigatorParamList,
      'RegisterCodeVerification'
    > {}
}
