import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    categories: [],
    productList: [],
    cart: [],
  },
  reducers: {
    getCategories: () => {},
    saveCategories(state, action) {
      state.categories = action.payload;
    },
    getProductData: () => {},
    saveProductList(state, action) {
      state.productList = action.payload;
    },
    handelCart(state, action) {
      if (action.payload.opt === "add") {
        const isFound = state.cart.findIndex((product) => {
          return product.id === action.payload.product.id;
        }); // index or -1
        if (isFound > -1) {
          state.cart[isFound].qty += 1;
        } else {
          let _product = { ...action.payload.product };
          _product["qty"] = 1;
          state.cart.push(_product);
        }
      }

      // remove logic
      if (action.payload.opt === "remove") {
        const isFound = state.cart.findIndex((product) => {
          return product.id === action.payload.product.id;
        }); // index or -1
        if (isFound > -1) {
          if (state.cart[isFound].qty === 1) {
            state.cart.splice(isFound, 1); // index, deleteCount
          } else {
            state.cart[isFound].qty -= 1;
          }
        }
      }
    },
  },
});

export const {
  saveCategories,
  saveProductList,
  handelCart,
  getCategories,
  getProductData,
} = ProductSlice.actions;
export default ProductSlice;
