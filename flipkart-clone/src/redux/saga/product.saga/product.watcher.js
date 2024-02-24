import { takeLatest } from "redux-saga/effects";
import { getCategories, getProductData } from "../../product.slice";
import {
  getProductCategoriesHandler,
  getProductDataHandler,
} from "./product.handler";

export function* getProductCategoriesWatcher() {
  yield takeLatest(getCategories.type, getProductCategoriesHandler);
}

export function* getProductDataWatcher() {
  yield takeLatest(getProductData.type, getProductDataHandler);
}
