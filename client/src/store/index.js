import { configureStore } from "@reduxjs/toolkit";

import { api } from "./api";
import { API_REDUCER_PATH } from "../utils/constants";
import { authReducer } from "./slices/auth.slice";

export const store = configureStore({
  reducer: { auth: authReducer, [API_REDUCER_PATH]: api.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
