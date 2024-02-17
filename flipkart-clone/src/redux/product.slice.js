import { createSlice } from "@reduxjs/toolkit";

let ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    categories: [],
  },
  reducers: {
    saveCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { saveCategories } = ProductSlice.actions;
export default ProductSlice;
