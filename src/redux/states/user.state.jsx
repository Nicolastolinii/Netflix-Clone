import { createSlice } from "@reduxjs/toolkit";
const initialStatee = () => {
  try {
    const dataId = localStorage.getItem("id");
    if (dataId === null) {
      return undefined;
    }
    return JSON.stringify(dataId);
  } catch (error) {
    return undefined;
  }
};
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: initialStatee(),
    
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
    },
  },
});


export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;

