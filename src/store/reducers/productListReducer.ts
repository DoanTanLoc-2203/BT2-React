/** @format */

import { ActionType } from "../constants";
import { Action } from "../actions";
import { Item } from "../../interface";

const initialState: Item[] = [];

const productListReducer = (state: Item[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_PRODUCTLIST:
      return action.payload;
    case ActionType.ERROR_PRODUCTLIST:
      console.log(action.payload);
      return [];
    default:
      return state;
  }
};

export default productListReducer;
