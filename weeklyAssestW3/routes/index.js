// Import Express
const express = require("express");
// Import controller
const {
  getAllWallet,
  getDetailWallet,
  addWallet,
  updateWallet,
  deleteWallet,
} = require("../controllers/crypto");
// Import axios
const dataAxios = require("../controllers/axios");

// Make routes
const router = express.Router();

// If client request to http://localhost:3000/data/dataAxios (GET), it will go to fetchApi function in axios.js
router.get("/dataAxios", dataAxios);

// If client request to http://localhost:3000/ (GET), it will go to getAllWallet function in Data controller class
router.get("/", getAllWallet);

// If client request to http://localhost:3000/data/:id (GET), it will go to getDetailWallet function in Data controller class
router.get("/:id", getDetailWallet);

router.post("/", addWallet);

router.put("/:id", updateWallet);

router.delete("/:id", deleteWallet);

// Export the routers
module.exports = router;
