/** @format */

import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productListReducer from "./productListReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  fillterSearch: searchReducer,
  cartList: cartReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
