import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IInitialState {
  theme: 'light' | 'dark';
  isKeyboardOpen: boolean;
}

const initialState: IInitialState = {
  theme: 'light',
  isKeyboardOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setIsKeyboardOpen: (state, action: PayloadAction<boolean>) => {
      state.isKeyboardOpen = action.payload;
    },
    toggleKeyboardOpen: state => {
      state.isKeyboardOpen = !state.isKeyboardOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggleTheme, toggleKeyboardOpen, setIsKeyboardOpen} =
  uiSlice.actions;

export default uiSlice.reducer;
