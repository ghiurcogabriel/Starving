import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_CART,
  DECREASE_CART,
  RESTAURANT_ITEMS,
  EMPTY_CART,
} from "../Types";
import { CartItem } from "../cartTypes";

type CartStateType = {
  items: CartItem[];
}

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const arrItems = state.items?.map((item) => item._id);
      // console.log("array items:", arrItems);
      let newItem = action.payload;
      // console.log(newItem);
      // console.log("new item added: ", newItem._id);
      if (newItem._id === arrItems[arrItems.length - 1]) {
        // console.log("good");
        return {
          ...state,
        };
      }
      
      return {
        ...state,
        error: [...state.error, newItem._id],
        items: [...state.items, newItem],
        totalItems: state.totalItems++,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
        totalItems: state.totalItems--,
      };

    case INCREASE_CART:
      let updateCart = state.items?.map((currentItem) => {
        if (currentItem._id === action.payload) {
          return { ...currentItem, quantity: currentItem.quantity + 1 };
        }
        // console.log(currentItem);
        return currentItem;
      });
      // console.log(updateCart);
      return { ...state, items: updateCart, totalItems: state.totalItems + 1 };

    case DECREASE_CART:
      let update = state.items
        ?.map((currentItem) => {
          if (currentItem._id === action.payload) {
            return { ...currentItem, quantity: currentItem.quantity - 1 };
          }
          // console.log(currentItem);
          return currentItem;
        })
        .filter((currentItem) => currentItem.quantity !== 0);
      // console.log(update);
      return { ...state, items: update, totalItems: state.totalItems - 1 };

    case RESTAURANT_ITEMS:
      return {
        ...state,
        restaurantItems: [...state.restaurantItems, action.payload],
      };

      case EMPTY_CART:
        return {
          ...state, 
          items: [],
          error: [],
          restaurantItems: [],
          totalItems: 0
        }
    default:
      return state;
  }
};

export default CartReducer;
