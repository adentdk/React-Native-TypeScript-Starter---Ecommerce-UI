declare namespace ITheme {
  interface ITheme {
    isDark: boolean;
    color: {
      primary: string;
      background: string;
      backgroundSecondary: string;
      line: string;
      text: string;
      input: string;
      inputPlaceholder: string;
      inputLabel: string;
      dim: string;
      error: string;
      card: string;
    };
  }

  interface IThemeContext {
    theme: ITheme;
    toggleTheme: () => void;
  }
}

export {ITheme};
