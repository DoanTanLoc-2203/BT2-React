/** @format */

import { repositoryFactory } from "./../../repository/repositoryFactory";
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

export const fetchData = (name: string) => {
  return (dispatch: Dispatch) => {
    const fetchData = async () => {
      const promise = repositoryFactory.get(name);
      if (promise) {
        const { data } = await promise.get();
        dispatch(setProductList(data));
      } else {
        dispatch(errorProducList("Error"));
      }
    };
    fetchData();
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
export const fecthDataPost = (name: string) => {
  return (dispatch: Dispatch) => {
    const fetchData = async () => {
      const promise = repositoryFactory.get(name);
      if (promise) {
        const { data } = await promise.get();
        dispatch(setPostList(data));
      } else {
        dispatch(errorPostList([]));
      }
    };
    fetchData();
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
