import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IUserData {
  id: string;
  email: string;
  name: string;
  avatar: string;
}

interface IInitialState {
  user: null | IUserData;
  token: null | string;
}

const initialState: IInitialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserData>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const {setUser, setToken} = authSlice.actions;

export default authSlice.reducer;
