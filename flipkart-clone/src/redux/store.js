import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./product.slice";

import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/rootSaga";

// combine reducer
const reducer = combineReducers({
  product: ProductSlice.reducer,
});

// create a middleware
const sagaMiddleware = createSagaMiddleware();

// store
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
