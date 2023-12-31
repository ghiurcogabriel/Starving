const Restaurant = require("../models/restaurantSchema");
const mongoose = require("mongoose");

//get all restaurants
const getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find({}).sort({ createdAt: -1 });

  res.status(200).json(restaurants);
};

//get single restaurant
const getSingleRestaurant = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such restaurant!" });
  }

  const restaurant = await Restaurant.findById(id);
  if (!restaurant) {
    return res.status(404).json({ error: "Restaurant not found!" });
  }
  res.status(200).json(restaurant);
};

//create a restaurant
const createRestaurant = async (req, res) => {
  const {
    title,
    description,
    openHours,
    closed,
    deliveryFee,
    minOrder,
    maxDistance,
    costExtraDistance,
    menus
  } = req.body;
  try {
    const restaurant = await Restaurant.create({
      title,
      description,
      openHours,
      closed,
      deliveryFee,
      minOrder,
      maxDistance,
      costExtraDistance,
      menus
    });
    res.status(200).json(restaurant);
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: err.message });
  }
};

//delete a restaurant
const deleteRestaurant = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such restaurant!" });
  }

  const restaurant = await Restaurant.findOneAndDelete({ _id: id });

  if (!restaurant) {
    return res.status(400).json({ error: "Restaurant not found!" });
  }

  res.status(200).json(restaurant);
};

//update a restaurant
const updateRestaurant = async (req, res) => {
  console.log(req);
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such restaurant!" });
  }

  const restaurant = await Restaurant.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!restaurant) {
    return res.status(400).json({ error: "Restaurant not found!" });
  }

  res.status(200).json(restaurant);
};

module.exports = {
  getRestaurants,
  getSingleRestaurant,
  createRestaurant,
  deleteRestaurant,
  updateRestaurant,
};
