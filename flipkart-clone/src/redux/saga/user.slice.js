import { createSlice } from "@reduxjs/toolkit";

let UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    user: null,
  },
  reducers: {
    makeLogin() {},
    saveUserData(state, action) {
      console.log(action.payload);
    },
  },
});

export default UserSlice;
export const { makeLogin, saveUserData } = UserSlice.actions;
