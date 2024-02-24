import { all } from "redux-saga/effects";
import {
  getProductCategoriesWatcher,
  getProductDataWatcher,
} from "./product.saga/product.watcher";

export function* rootSaga() {
  let actionList = [getProductCategoriesWatcher(), getProductDataWatcher()];
  yield all(actionList);
}
