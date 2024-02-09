import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      return state, state.filter((itemId) => itemId !== action.payload);
    },
    clearBag: (state, action) => {
      return [];
    },
  },
});

export const { addToBag, removeFromBag, clearBag } = bagSlice.actions;

export default bagSlice.reducer;
