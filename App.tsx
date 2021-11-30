import React from 'react';

import {Provider as StoreProvider} from 'react-redux';
import {AppNavigator} from './src/navigators/AppNavigator';
import {store} from './src/store/index';
import {ThemeProvider} from './src/themes';

import './src/i18n';

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
