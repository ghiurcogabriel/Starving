import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Styles.css";
import CartContext from "../context/cart/CartContext";

const Home = () => {
  const [data, setData] = useState([]);
  // const {id} = useParams();

  // console.log(data.map((item) => console.log(item.deliveryFee)));
  const {restItems} = useContext(CartContext);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch("/api/restaurants/");
      const data = await response.json();
      // console.log(data)
      if (response.ok) {
        setData(data);
      }
    };

    fetchRestaurants();
  }, []);
  return (
    <div className="home-restaurant">
      {data?.map((item) => (
        <Link key={item._id} to={`restaurant/${item._id}`} onClick={() => restItems(item)}>
          <div className="home-card">
            <div className="restaurant-card">
              <div className="restaurant-title">
                <h1>{item.title}</h1>
              </div>
              <div className="hours">
                <p>
                  open between: {item?.openHours} & {item?.closed}
                </p>
              </div>
              <div className="restaurant-order-details">
                <p>delivery fee: {item?.deliveryFee}</p>
                <p>minimum oders: {item?.minOrder} Lei</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
