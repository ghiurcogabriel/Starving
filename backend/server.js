require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const mongo = require("mongodb");
const bodyParser = require('body-parser')

const restaurantRoutes = require("./routes/restaurants");

//express app
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/restaurants", restaurantRoutes);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Acces-Control_Allow-Methods", "GET,POST,DELETE,PATCH");
  next();
});


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port 6969");
    });
  })
  .catch((err) => {
    console.log(err);
  });
