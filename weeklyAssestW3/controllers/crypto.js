// Import data atm crypto
let wallet = require("../models/cryptoAtm.json");

// data controller
class Wallet {
  getAllWallet(req, res) {
    try {
      let listName = wallet.map((el) => el.name);

      // Response 200
      res.status(200).json({ venues: listName });
    } catch (error) {
      // Response 500 kalau error
      res.status(500).json({
        errors: ["Internet Server Error"],
      });
    }
  }

  getDetailWallet(req, res) {
    try {
      // Cari data menggunakan req.params.user_id
      let detailWallet = wallet.filter(
        (el) => el.id === parseInt(req.params.id)
      );

      if (detailWallet.length === 0) {
        //   Respons kalau Wallet tidak ketemu
        return res.status(500).json({ errors: ["Wallet not found!"] });
      }

      // Respons kalau 200 OK
      res.status(200).json({ venues: detailWallet });
    } catch (error) {
      // Respons 500 kalau error
      res.status(500).json({
        errors: ["Internet Server Error"],
      });
    }
  }

  // Make addData
  addWallet(req, res, next) {
    try {
      // Make random id number
      const randomId = Math.floor(Math.random() * 100);

      // Add data student to data
      wallet.push({
        id: randomId,
        category: req.body.category,
        name: req.body.name,
      });
      res.status(201).json({ venues: wallet });
    } catch (error) {
      res.status(500).json({
        errors: ["Internal Server Error"],
      });
    }
  }

  updateWallet(req, res, next) {
    try {
      // Find the wallet
      let findWallet = wallet.some(
        (item) => item.id === parseInt(req.params.id)
      );

      // If data not exists
      if (!findWallet) {
        // It will response client with status 404 and { errors: ["Wallet not found"] }
        return res.status(404).json({ errors: ["Wallet not found"] });
      }

      // Update data wallet to data by req.params.id
      wallet = wallet.map((item) =>
        item.id === parseInt(req.params.id)
          ? {
              id: parseInt(req.params.id),
              category: req.body.category,
              name: req.body.name,
            }
          : item
      );

      // It will response to client with status 201 (Created) and { data: data }
      res.status(200).json({ venues: wallet });
    } catch (error) {
      // If something error, it will return response with status 500 and { errors: ["Internal Server Error"] }
      res.status(500).json({
        errors: ["Internal Server Error"],
      });
    }
  }

  deleteWallet(req, res, next) {
    try {
      // Find the wallet is exist or not
      let findWallet = wallet.some(
        (item) => item.id === parseInt(req.params.id)
      );

      // If data not exists
      if (!findWallet) {
        // It will response client with status 404 and { errors: ["Wallet not found"] }
        return res.status(404).json({ errors: ["Wallet not found"] });
      }

      // Delete wallet to wallet by req.params.id
      wallet = wallet.filter((item) => item.id !== parseInt(req.params.id));

      // It will response to client with status 201 (Created) and { data: data }
      res.status(200).json({ venues: wallet });
    } catch (error) {
      // If something error, it will return response with status 500 and { errors: ["Internal Server Error"] }
      res.status(500).json({
        errors: ["Internal Server Error"],
      });
    }
  }
}

// Export module
module.exports = new Wallet();
