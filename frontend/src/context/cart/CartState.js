import { Children, useReducer } from "react";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_CART,
  DECREASE_CART,
} from "../Types";
import CartReducer from "./CartReducer";
import CartContext from "./CartContext";

const CartState = ({ children }) => {
  const initialState = {
    items: [],
    totalItems: 0,
  };
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (items) => {
    dispatch({ type: ADD_TO_CART, payload: items });
  };
  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };
  const increaseItems = (num) => {
    dispatch({ type: INCREASE_CART, payload: num });
  };
  const decreaseItems = (num) => {
    dispatch({ type: DECREASE_CART, payload: num - 1 });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.items,
        totalItems: state.totalItems,
        addToCart,
        removeFromCart,
        increaseItems,
        decreaseItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
