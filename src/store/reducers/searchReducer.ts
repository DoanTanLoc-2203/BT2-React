/** @format */

import { ActionType } from "../constants";
import { Action } from "../actions";
import { Item } from "../../interface";

const initialState: Item[] = [];

const searchReducer = (state: Item[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FILLTER_PRODUCTLIST:
      let tempData: Item[] = [];
      action.payload.data.forEach((element: Item) => {
        if (element.name.indexOf(action.payload.text) >= 0) {
          tempData.push(element);
        }
      });
      return tempData;
    default:
      return state;
  }
};

export default searchReducer;
