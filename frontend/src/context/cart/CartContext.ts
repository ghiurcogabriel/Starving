import {createContext} from 'react';
import { CartContextType } from '../cartTypes';

const INITIAL_CONTEXT: CartContextType = {
    cartItems: [],
    totalItems: 0,
    increaseItems: () => {},
    decreaseItems: () => {},
    removeFromCart: () => {},
    restaurantItems: [],
    emptyCart: () => {},
    qty: 0,
    error: '',
    addToCart: () => {},
    restItems: () => {},
}

const CartContext = createContext<CartContextType>(INITIAL_CONTEXT);

export default CartContext;