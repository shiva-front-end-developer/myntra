import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";

const store = configureStore({
  reducer: {
    items: itemSlice,
    fetchStatus: fetchStatusSlice,
    bag: bagSlice,
  },
});

export default store;
