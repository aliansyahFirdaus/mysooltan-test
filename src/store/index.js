import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user-slice";

const store = configureStore({
  reducer: { userDetail: userReducer },
});

export default store;
