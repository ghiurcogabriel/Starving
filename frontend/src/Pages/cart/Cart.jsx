import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart/CartContext";
import food from "../../assets/food-placeholder.png";
import cartgif from "../../assets/cartgif.gif";
import "./Cart.css";
import { FaPlusCircle, FaMinusCircle, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    totalItems,
    increaseItems,
    decreaseItems,
    removeFromCart,
    restaurantItems,
    emptyCart
  } = useContext(CartContext);
  // const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [restaurantData, setRestaurantData] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  console.log(restaurantData.title);
  useEffect(() => {
    const total = cartItems.reduce(
      (amount, item) => item.quantity * item.price + amount,
      0
    );
    setTotalPrice(total);

    restaurantItems.map((data) => {
      return setRestaurantData(data);
    });

    const cartTotal =
      total + restaurantData.deliveryFee + restaurantData.costExtraDistance;
    setTotalCart(cartTotal);
  }, [
    cartItems,
    restaurantItems,
    restaurantData.deliveryFee,
    restaurantData.costExtraDistance,
  ]);

  return (
    <>
    {cartItems.length !== 0 ? (
      <div className="cart-main-container">
      <div className="cart-contents">
        <button style={{margin: '10px', backgroundColor: '#510707'}} onClick={() => emptyCart()} className="order">delete cart</button>
        {cartItems &&
          cartItems?.map((item) => (
            <div className="cart-container">
              <div className="food-container">
                <div className="img-prod-container">
                  <img src={food} alt="" />
                </div>
                <div className="cart-product-details">
                  <div className="prod-title">
                    <p>{item.name}</p>
                    <FaTrash
                      color="#9c0d0d"
                      style={{ cursor: "pointer" }}
                      onClick={() => removeFromCart(item._id)}
                    />
                  </div>
                  <div className="cart-actions">
                    <div className="quatity-box">
                      <FaMinusCircle
                        style={{ cursor: "pointer", margin: "0 10px" }}
                        size={20}
                        onClick={() => decreaseItems(item._id)}
                      />
                      <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                        {item.quantity}
                      </span>
                      <FaPlusCircle
                        style={{ cursor: "pointer", margin: "0 10px" }}
                        size={20}
                        onClick={() => increaseItems(item._id)}
                      />
                    </div>
                    <div className="price-box">
                      {item.quantity * item.price} RON
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="right-container">
        <div className="summary">
          <h3>Order Summary</h3>
          <div className="summary-item">
            <h3>Products ( x {totalItems} )</h3>
            <h3>
              {totalPrice} <sup>00</sup> Ron
            </h3>
          </div>
          <div className="summary-item">
            <h3>Delivery Fee</h3>
            <h3>
              {restaurantData.deliveryFee} <sup>00</sup> Ron
            </h3>
          </div>
          <div className="summary-item">
            <h3>Extra Distance Fee</h3>
            <h3>
              {restaurantData.costExtraDistance} <sup>00</sup> Ron
            </h3>
          </div>
          <div className="summary-item">
            <h3>Total </h3>
            <h3>
              {totalCart} <sup>00</sup> Ron
            </h3>
          </div>
        </div>
        <div className="next-button">
          <Link>Next step</Link>
        </div>
      </div>
    </div>
    ) : (
      <div className="nothing">
        <h1>Nothing to show yet, go buy some good food!</h1>
        <img src={cartgif} alt="" />
      </div>
    )}
    
    </>
  );
    
};

export default Cart;
