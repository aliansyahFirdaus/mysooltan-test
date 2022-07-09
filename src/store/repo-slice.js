import { createSlice } from "@reduxjs/toolkit";

const repoSlice = createSlice({
  name: "repo-slice",
  initialState: { repos: [] },
  reducers: {
    getRepo(state, action) {
      state.repos = action.payload;
    },
  },
});

export const repoAction = repoSlice.actions
export default repoSlice.reducer