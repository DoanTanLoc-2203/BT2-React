/** @format */

import { Cart } from "./../../interface/index";
import { ActionType } from "../constants";
import { Action } from "../actions";

const initialState: Cart[] = [];

const cartReducer = (state: Cart[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TOCART: {
      let tempCartArray: Cart[] = state;
      let check: boolean = false;
      tempCartArray.forEach((element: Cart) => {
        if (element.id === action.payload.id) {
          element.quantity++;
          check = true;
        }
      });
      if (!check) {
        tempCartArray.push(action.payload);
      }
      return tempCartArray;
    }
    case ActionType.DELETE_CART: {
      let temp: Cart[] = state.filter((obj) => obj.id !== action.payload);
      return temp;
    }
    case ActionType.UPDATE_CART: {
      let temp: Cart[] = [...state];
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].id === action.payload.id) {
          let res: number =
            parseFloat(temp[i].price.substring(0, temp[i].price.length - 1)) /
            temp[i].quantity;
          temp[i].quantity = action.payload.value;
          let newprice: string = (res * temp[i].quantity).toString() + "$";
          temp[i].price = newprice;
          break;
        }
      }
      return temp;
    }
    default:
      return state;
  }
};

export default cartReducer;
