/** @format */

import { PostItem } from "./../../interface/index";
import axios from "axios";
import { Dispatch } from "redux";
import { Cart, Item } from "../../interface";
import { Action } from "../actions";
import { ActionType } from "../constants";

export const setProductList = (list: Item[]) => {
  return {
    type: ActionType.SET_PRODUCTLIST,
    payload: list,
  };
};

export const errorProducList = (error: string) => {
  return {
    type: ActionType.ERROR_PRODUCTLIST,
    payload: error,
  };
};

export const fetchData = (url: string) => {
  return (dispatch: Dispatch) => {
    axios
      .get(url)
      .then((res) => {
        const data: Item[] = res.data;
        dispatch(setProductList(data));
      })
      .catch((err) => {
        dispatch(errorProducList(err.toString()));
      });
  };
};

export const fillterProductList = (text: string, list: Item[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FILLTER_PRODUCTLIST,
      payload: { text: text, data: list },
    });
  };
};

export const addToCart = (item: Cart) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_TOCART,
      payload: item,
    });
  };
};

export const deleteCart = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_CART,
      payload: id,
    });
  };
};

export const updateCart = (id: number, value: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE_CART,
      payload: { id: id, value: value },
    });
  };
};

export const setPostList = (list: PostItem[]) => {
  return {
    type: ActionType.SET_POSTLIST,
    payload: list,
  };
};

export const errorPostList = (list: PostItem[]) => {
  return {
    type: ActionType.SET_POSTLIST,
    payload: list,
  };
};
export const fecthDataPost = (url: string) => {
  return (dispatch: Dispatch) => {
    axios
      .get(url)
      .then((res) => {
        const data: PostItem[] = res.data;
        dispatch(setPostList(data));
      })
      .catch((err) => {
        dispatch(errorPostList(err.toString()));
      });
  };
};

export const addToPost = (data: PostItem) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_TOPOST,
      payload: data,
    });
  };
};
