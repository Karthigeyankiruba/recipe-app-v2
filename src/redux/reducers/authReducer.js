import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    signUpSuccess: (state, action) => {
      state.user = action.payload;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { signUpSuccess, loginSuccess } = authSlice.actions;
export default authSlice.reducer;
