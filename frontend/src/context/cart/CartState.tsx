import React from "react";
import { useReducer } from "react";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_CART,
  DECREASE_CART,
  RESTAURANT_ITEMS,
  EMPTY_CART,
} from "../Types";
import CartReducer from "./CartReducer";
import CartContext from "./CartContext";
import { CartItem } from "../cartTypes";

type CartStateType = {
  items: CartItem[];
  totalItems: number;
  qty: number;
  total: number;
  errors: string;
  restaurantItems: CartItem[];
};

const CartState = ({ children }) => {
  const initialState: CartStateType = {
    items: [],
    totalItems: 0,
    qty: 1,
    total: 0,
    errors: '',
    restaurantItems: [],
  };
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (items) => {
    return dispatch({ type: ADD_TO_CART, payload: items });
  };
  const removeFromCart = (id) => {
    return dispatch({ type: REMOVE_FROM_CART, payload: id });
  };
  const increaseItems = (id) => {
    return dispatch({ type: INCREASE_CART, payload: id });
  };
  const decreaseItems = (id) => {
    return dispatch({ type: DECREASE_CART, payload: id });
  };
  const restItems = (items) => {
    return dispatch({ type: RESTAURANT_ITEMS, payload: items });
  };
  const emptyCart = () => {
    return dispatch({ type: EMPTY_CART });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.items,
        totalItems: state.totalItems,
        qty: state.qty,
        error: state.error,
        restaurantItems: state.restaurantItems,
        addToCart,
        removeFromCart,
        increaseItems,
        decreaseItems,
        restItems,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
