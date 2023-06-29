import React, { useEffect, useState, useContext } from "react";
import svg1 from "../../assets/svg1.svg";
import svg2 from "../../assets/svg2.svg";
import "../Styles.css";
import { useParams } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";

const Restaurant = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [restId, setRestId] = useState(null);
  
  const {addToCart, increaseItems} = useContext(CartContext);
  // console.log(data?.menus?.map(item => {return item.price}));

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch(`/api/restaurants/${id}`);
      const data = await response.json();
      //   console.log(data);
      if (response.ok) {
        setData(data);
      }
    };

    fetchRestaurants();
  }, [id]);
  console.log(data?._id);


  // useEffect(()=> {
  //    const restaurantId = data?.map((rId) => {
  //     return rId.id
  //   })
  //   setRestId(restaurantId)
  // }, [])
  const handleAddFood = (menu)=> {
   
    if(data?._id == data?._id){
      addToCart(menu)
    }
  }
  
  console.log(restId)
  return (
    <>
      {data?.menus?.map((menu) => (
        <div className="card">
          <div className="content">
            <div className="back">
              <div className="back-content">
                <img src={svg1} alt="" />
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
                <small className="badge">mangiare bene</small>
                <div className="description">
                  <div className="title">
                    <p className="title">
                      <strong>{menu.description}</strong>
                    </p>
                  </div>
                  <p className="card-footer">
                    {menu?.price} RON &nbsp; | &nbsp; {menu?.quantity} gr
                  </p>
                  <button onClick={() => increaseItems(menu)}>increase</button>
                  <button onClick={() => handleAddFood(menu)}>Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Restaurant;
