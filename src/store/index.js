import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  owner: {username: "aliansyahFirdaus"},
};

const ownerSlice = createSlice({
  name: "owner",
  initialState,
  reducers: {
    fetchOwner(state, action) {
      state.owner = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { owners: ownerSlice.reducer },
});

export default store