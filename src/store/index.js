import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user-slice";
import repoReducer from "./repo-slice"

const store = configureStore({
  reducer: { userDetail: userReducer, repoList: repoReducer },
});

export default store;
