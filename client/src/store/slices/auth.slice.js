import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  id: null,
  user: null,
};

export const { actions: authActions, reducer: authReducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (_, action) => {
      const user = action.payload;
      if (!user) return;
      const { token, _id: id, ...userData } = user;
      return {
        id,
        token,
        user: userData,
      };
    },
    logout: () => initialState,
  },
});
