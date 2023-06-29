import { useReducer } from "react";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_CART,
  DECREASE_CART,
} from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
        totalItems: state.totalItems++
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case INCREASE_CART:
      const newCartItems = action.payload;
      let existingItems = state.items.find(
        (item) => item.id === newCartItems.id
      );
      if (existingItems) {
        existingItems = {
          ...existingItems,
          totalItems: existingItems.totalItems + 1,
        };
      }
      return {
        ...state,
        items: !existingItems
          ? [...state.items, newCartItems]
          : [...state.items, existingItems],
        totalItems: state.totalItems++,
      };
    case DECREASE_CART:
      return {
        ...state,
        totalItems: [...state.totalItems, action.payload],
      };

    default:
      return state;
  }
};

export default CartReducer;
