const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    openHours: { type: String, required: true },
    closed: { type: String, required: true },
    deliveryFee: { type: Number, required: true },
    minOrder: { type: Number, required: true },
    maxDistance: { type: Number, required: true },
    costExtraDistance: { type: Number, required: true },
    menus: [
      {
        name: { type: String, required: true },
        description: { type: String, required: true },
        quantity: { type: Number, required: true },
        weight: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
