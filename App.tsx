import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavigator from './src/navigators/RootNavigator';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
