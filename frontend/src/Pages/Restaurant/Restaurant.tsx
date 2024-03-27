import React, { useEffect, useState, useContext } from "react";
// import svg1 from "../../assets/svg1.svg";
import "../Styles.css";
import "./Restaurant.css";
import { useParams } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";
import { ToastContainer, toast } from "react-toastify";
import { CartItem, RestaurantType } from "../../context/cartTypes";

import "react-toastify/dist/ReactToastify.css";
const Restaurant = () => {
  const { id } = useParams();
  const [data, setData] = useState<RestaurantType>();

  const { addToCart, error } = useContext(CartContext);
  console.log(data?.menus);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch(`/api/restaurants/${id}`);
      const data = await response.json();
      if (response.ok) {
        setData(data);
      }
    };

    fetchRestaurants();
  }, [id]);

  const handleAddFood = (menu: CartItem) => {
    addToCart(menu);
  };

  const notify = () => {
    toast.error("product already in cart, please change quantity from cart", {
      position: toast.POSITION.TOP_RIGHT,
      toastId: error[0],
      theme: "dark",
    });
  };

  const checkItem = (menuId: string) => {
    for (let i = 0; i < error.length; i++) {
      const element = error[i];
      if (element === menuId) {
        notify();
      }
    }
  };

  return (
    <>
      {data?.menus?.map((menu: CartItem) => (
        <div className="card">
          <div className="content">
            <div className="back">
              <div className="back-content">
                <img src={'../../assets/svg1.svg'} alt="" />
                <strong>{menu?.name}</strong>
                <div></div>
              </div>
            </div>
            <div className="front">
              <div className="img">
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>

              <div className="front-content">
                <small className="badge">{menu.name}</small>
                <div className="description">
                  <div className="title">
                    <p className="title">
                      <strong>{menu.description}</strong>
                    </p>
                  </div>
                  <p className="card-footer">
                    {menu?.price} RON &nbsp; | &nbsp; {menu?.weight} gr
                  </p>
                  <button
                    className="order"
                    onClick={() => {
                      handleAddFood(menu);
                      checkItem(menu._id);
                    }}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* {error?.length > 0 ? notify() : ""} */}
      {/* <ToastContainer /> */}
    </>
  );
};

export default Restaurant;
