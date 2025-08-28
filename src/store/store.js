import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/users.slice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
