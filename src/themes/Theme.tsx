import * as React from 'react';
import lightTheme from './lightTheme';
import darkTheme from './darkTheme';
import {useAppSelector, useAppDispatch} from '../store/hooks';
import {toggleTheme} from '../store/uiSlice';
import {ITheme} from './theme';

export const ThemeContext = React.createContext<ITheme.IThemeContext>({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC = ({children}) => {
  const theme = useAppSelector(state => state.ui.theme);
  const dispatch = useAppDispatch();

  const _toggleTheme = () => {
    dispatch(toggleTheme());
  };

  const themeStyles = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeContext.Provider
      value={{theme: themeStyles, toggleTheme: _toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const withTheme =
  (Component: React.ComponentType<any>) => (props: any) =>
    (
      <ThemeContext.Consumer>
        {({theme, toggleTheme: _toggleTheme}) => (
          <Component {...props} theme={theme} toggleTheme={_toggleTheme} />
        )}
      </ThemeContext.Consumer>
    );

export const useTheme = () => React.useContext(ThemeContext);
