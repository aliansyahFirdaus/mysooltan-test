import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user-slice",
  initialState: {
    user: {},
    repo: 0
  },
  reducers: {
    getUser(state, action) {
      state.user = action.payload;
    },
    getCountRepo(state, action){
      state.repo = action.payload
    }
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
