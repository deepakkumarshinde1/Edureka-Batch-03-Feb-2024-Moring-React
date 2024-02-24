import { call, put } from "redux-saga/effects";
import {
  getProductCategoriesService,
  getProductDataService,
} from "./product.service";
import { saveCategories, saveProductList } from "../../product.slice";

export function* getProductCategoriesHandler() {
  console.log("handler");
  try {
    let data = yield call(getProductCategoriesService);
    console.log(data);
    yield put(saveCategories(data));
  } catch (error) {
    alert("Server error");
    console.log(error);
  }
}

export function* getProductDataHandler(action) {
  try {
    let data = yield call(getProductDataService, action.payload);
    yield put(saveProductList(data));
  } catch (error) {
    alert("Server error");
    console.log(error);
  }
}
