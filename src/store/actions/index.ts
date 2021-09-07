/** @format */

import { Cart, Item } from "./../../interface/index";
import { ActionType } from "../constants";

export interface SetProductListAction {
  type: ActionType.SET_PRODUCTLIST;
  payload: Item[];
}

export interface ErrorGetProductList {
  type: ActionType.ERROR_PRODUCTLIST;
  payload: string;
}

export interface FillterProductList {
  type: ActionType.FILLTER_PRODUCTLIST;
  payload: { text: string; data: Item[] };
}

export interface AddToCart {
  type: ActionType.ADD_TOCART;
  payload: Cart;
}

export interface DeleteCart {
  type: ActionType.DELETE_CART;
  payload: number;
}

export interface UpdateCart {
  type: ActionType.UPDATE_CART;
  payload: { id: number; value: number };
}

export type Action =
  | SetProductListAction
  | ErrorGetProductList
  | FillterProductList
  | AddToCart
  | DeleteCart
  | UpdateCart;
