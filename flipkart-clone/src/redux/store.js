import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./product.slice";

// combine reducer
const reducer = combineReducers({
  product: ProductSlice.reducer,
});
// store
const store = configureStore({
  reducer,
});

export default store;
