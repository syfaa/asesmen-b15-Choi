const express = require("express"); // Import express

const {
  getAllProduct,
  getDetailProduct,
  addProduct,
} = require("../controllers/express"); // Import product controller

const dataPalsu = require("../controllers/faker");

const router = express.Router(); // Make router

// If client request to http://localhost:3000/product (GET), it will go to getAllProduct function in product controller class
router.get("/", getAllProduct);

router.get("/dataPalsu", dataPalsu);

// If client request to http://localhost:3000/product/:number (GET), it will go to getDetailProduct function in product controller class
router.get("/:number", getDetailProduct);

// If client request to http://localhost:3000/product (POST), it will go to addProduct function in product controller class
router.post("/", addProduct);

module.exports = router; // Exports router
