const express = require("express");

const {
  getRestaurants,
  getSingleRestaurant,
  createRestaurant,
  deleteRestaurant,
  updateRestaurant,
} = require("../controllers/restaurantController");

const router = express.Router();
router.use(express.json());

router.get("/", getRestaurants);

router.get("/:id", getSingleRestaurant);

router.post("/", createRestaurant);

router.delete("/:id", deleteRestaurant);

router.patch("/:id", updateRestaurant);

module.exports = router;
