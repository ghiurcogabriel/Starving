import React, { useContext } from "react";
import CartContext from "../../context/cart/CartContext";

const Cart = () => {
  const { cartItems, totalItems } = useContext(CartContext);
  console.log(cartItems)
  return (
    <div>
      <div>
        {cartItems && cartItems?.map((item)=>(
            <p>{item.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Cart;
