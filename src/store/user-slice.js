import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user-slice",
  initialState: {
    user: {
      username: "aliansyahFirdaus",
      bio: "Frontend Engineer | From Reducer",
      followers: 20,
      following: 32,
      repos: [],
      link: "https://facebook.com",
    },
  },
  reducers: {
    getUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
