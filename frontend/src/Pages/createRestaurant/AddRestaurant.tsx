import React, { useEffect } from "react";
import { useState } from "react";
import "./AddRestaurant.css";

const AddRestaurant = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [openHours, setOpenHours] = useState('');
  const [closed, setClosed] = useState('');
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [minOrder, setMinOrder] = useState(0);
  const [maxDistance, setMaxDistance] = useState(0);
  const [costExtraDistance, setCostExtraDistance] = useState(0);

  const [error, setError] = useState(null);


  useEffect(() => {

  }, [])

  const handleAddRestaurant = async () => {
    const fetchRes = await fetch("/api/restaurants/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        openHours,
        closed,
        deliveryFee,
        minOrder,
        maxDistance,
        costExtraDistance,
      }),
    })
    const res = await fetchRes.json();
    if(!fetchRes.ok){
      setError(res.error)
    } 
    if(fetchRes.ok){
      setError(null);
      console.log('new restaurant added:', res)
    }
  };

  return (
    <div className="restaurant-container">
      <div className="restaurant-main">
        <form
          action=""
          method="post"
          onSubmit={handleAddRestaurant}
          className="restaurant-form"
        >
          <label htmlFor="title" className="rest-label">
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Name of restaurant"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="description" className="rest-label">
            <textarea
              rows={10}
              cols={10}
              name="description"
              value={description}
              placeholder="add a description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label htmlFor="openHours" className="rest-label">
            <p>Open at:</p>
            <input
              type="time"
              name="openHours"
              value={openHours}
              min="00:00"
              max="23:59"
              step="60"
              onChange={(e) => setOpenHours(e.target.value)}
              />
          </label>
          <label htmlFor="closed" className="rest-label">
            <p>Closed at:</p>
            <input
              type="time"
              name="closed"
              value={closed}
              min="00:00"
              max="23:59"
              step="60"
              onChange={(e) => setClosed(e.target.value)}
              />
          </label>
          <label htmlFor="closed" className="rest-label">
            <span>Delivery Fee</span>
            <input
              type="number"
              name="closed"
              value={deliveryFee}
              onChange={(e) => setDeliveryFee(e.target.value)}
              onWheel={(e) => e.target.blur()}
            />
          </label>
          <label htmlFor="closed" className="rest-label">
            <p>Minimum order:</p>
            <input
              type="number"
              name="closed"
              value={minOrder}
              onChange={(e) => setMinOrder(e.target.value)}
              onWheel={(e) => e.target.blur()}
            />
          </label>
          <label htmlFor="closed" className="rest-label">
            <p>Maximum distance:</p>
            <input
              type="number"
              name="closed"
              value={maxDistance}
              onChange={(e) => setMaxDistance(e.target.value)}
              onWheel={(e) => e.target.blur()}
            />
          </label>
          <label htmlFor="closed" className="rest-label">
            <p>Cost extra distance:</p>
            <input
              type="number"
              name="closed"
              value={costExtraDistance}
              onChange={(e) => setCostExtraDistance(e.target.value)}
              onWheel={(e) => e.target.blur()}
            />
          </label>
          <button>Add restaurant</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddRestaurant;
