import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
};

export const { actions: authActions, reducer: authReducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, user } = action.payload;
      if (!token || !user) return;
      state = action.payload;
    },
    logout: () => initialState,
  },
});
