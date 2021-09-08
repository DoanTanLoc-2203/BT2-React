/** @format */

import { PostItem } from "../../interface";
import { Action } from "../actions";
import { ActionType } from "../constants";

const initialState: PostItem[] = [];

const postReducer = (state: PostItem[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_POSTLIST:
      return action.payload;
    case ActionType.ERROR_POSTLIST:
      return action.payload;
    case ActionType.ADD_TOPOST:
      let tempPostArray: PostItem[] = state;
      tempPostArray.push(action.payload);
      return tempPostArray;
    default:
      return state;
  }
};

export default postReducer;
