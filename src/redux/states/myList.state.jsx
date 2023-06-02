import { createSlice } from "@reduxjs/toolkit";


export const myListSlice = createSlice({
  name: "list",
  initialState: {
    list: [],
  },
  reducers: {
    setList: (state, action) => {
        const newItem = {
            id:action.payload.id,
          dataInfo: action.payload.dataInfo,
          dataLeng: action.payload.dataLeng,
          dataSrc: action.payload.dataSrc,
          favorite: action.payload.favorite,
        };
        state.list = [...state.list, newItem];
    },
    removeItem: (state, action) => {
        const itemId = action.payload;
        state.list = state.list.filter(item => item.id !== itemId);
      },
  },
});

export const { setList, removeItem } = myListSlice.actions;
export default myListSlice.reducer;
