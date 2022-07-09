import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user-slice",
  initialState: {
    user: {},
  },
  reducers: {
    getUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
