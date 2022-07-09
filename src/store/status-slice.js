import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
  name: "status-slice",
  initialState: { status: null, msg: "Silahkan Cari Username" },
  reducers: {
    updateStatus(state, action) {
      state.status = action.payload.status;
      state.msg = action.payload.msg;
    },
  },
});

export const statusAction = statusSlice.actions;
export default statusSlice.reducer;
