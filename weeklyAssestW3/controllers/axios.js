// Import modules Axios
const axios = require("axios");
let urlCryptoAtm = "https://https://api.coingecko.com/api/v3/exchange_rates";

let data = {};

// Get data dari API
const cryptoApi = async () => {
  try {
    let response = await axios.get(urlCryptoAtm);
    data = response.data.venues.map((el) => {
      return { id: el.id, name: el.name };
    });

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

// Export module
module.exports = cryptoApi;
