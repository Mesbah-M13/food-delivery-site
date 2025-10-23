import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementByOne: (state, action) => {
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrementByOne: (state, action) => {
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});

export const { addItem, removeItem, incrementByOne, decrementByOne } =
  cartSlice.actions;
export default cartSlice.reducer;
