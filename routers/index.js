// Import express
const express = require("express");

// Import albums controller
const { getAllData, getDetailData } = require("../controllers/hanguk");

// Import axios
const dataAxios = require("../controllers/axios");

// Make a router
const router = express.Router();

// If client request to http://localhost:3000/data (GET), it will render index.ejs
router.get("/", (req, res) => {
  res.render("index.ejs");
});

// If client request to http://localhost:3000/data/dataAxios (GET), it will go to fetchApi function in axios.js
router.get("/dataAxios", dataAxios);

// If client request to http://localhost:3000/data/full (GET), it will go to getAllData function in Data controller class
router.get("/full", getAllData);

// If client request to http://localhost:3000/data/:id (GET), it will go to getDetailData function in Data controller class
router.get("/:user_id", getDetailData);

// Export the routers
module.exports = router;
