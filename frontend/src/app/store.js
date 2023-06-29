import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authenSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
