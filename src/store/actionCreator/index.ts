/** @format */

import { Action } from "./../actions/index";
import { repositoryFactory } from "./../../repository/repositoryFactory";
import { Cart, Item } from "../../interface";
import { ActionType } from "../constants";
import { PostItem } from "./../../interface/index";
import { Dispatch } from "redux";

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

export const getProduct = (dispatch: Dispatch) => {
  const fecthData = async () => {
    try {
      const promise = repositoryFactory.get("product");
      if (promise) {
        const { data } = await promise.get();
        dispatch(setProductList(data));
      }
    } catch {
      dispatch(errorProducList("error"));
    }
  };
  fecthData();
};
export const getPost = () => {
  return (dispatch: Dispatch) => {
    const fecthData = async () => {
      try {
        const promise = repositoryFactory.get("posts");
        if (promise) {
          const { data } = await promise.get();
          dispatch(setPostList(data));
        }
      } catch {
        dispatch(errorPostList([]));
      }
    };
    fecthData();
  };
};

export const fillterProductList = (text: string, list: Item[]) => {
  return {
    type: ActionType.FILLTER_PRODUCTLIST,
    payload: { text: text, data: list },
  };
};

export const addToCart = (item: Cart) => {
  return {
    type: ActionType.ADD_TOCART,
    payload: item,
  };
};

export const deleteCart = (id: number) => {
  return {
    type: ActionType.DELETE_CART,
    payload: id,
  };
};

export const updateCart = (id: number, value: number) => {
  return {
    type: ActionType.UPDATE_CART,
    payload: { id: id, value: value },
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
// export const getPost = (dispatch: Dispatch) => {
//   const fecthData = async () => {
//     try {
//       const promise = repositoryFactory.get("posts");
//       if (promise) {
//         const { data } = await promise.get();
//         dispatch(setPostList(data));
//       }
//     } catch {
//       dispatch(errorPostList([]));
//     }
//   };
//   fecthData();
// };

export const addToPost = (data: PostItem) => {
  return {
    type: ActionType.ADD_TOPOST,
    payload: data,
  };
};
