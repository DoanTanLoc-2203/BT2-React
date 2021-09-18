/** @format */

import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import postReducer from "./postReducer";
import productListReducer from "./productListReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  fillterSearch: searchReducer,
  cartList: cartReducer,
  postList: postReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
