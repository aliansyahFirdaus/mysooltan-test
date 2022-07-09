import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user-slice";
import repoReducer from "./repo-slice";
import statusReducer from "./status-slice";

const store = configureStore({
  reducer: {
    userDetail: userReducer,
    repoList: repoReducer,
    currentStatus: statusReducer,
  },
});

export default store;
