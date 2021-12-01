declare namespace INavigator {
  export type MainNavigatorParamList = {
    Home: undefined;
  };

  export type RootTabNavigatorParamList = {
    Main: {
      screen: keyof INavigator.MainNavigatorParamList;
    };
    Wishlist: undefined;
    Orders: undefined;
    Account: undefined;
  };

  export type RootNavigatorParamList = {
    App: undefined;
    Login?: {
      redirect?:
        | keyof INavigator.RootTabNavigatorParamList
        | keyof INavigator.MainNavigatorParamList;
    };
    Register: undefined;
    RegisterCodeVerification: undefined;
    RegisterDetail: undefined;
  };
}
