// Import axios
const axios = require("axios"); // Import axios
let urlKorea = "https://www.mockachino.com/7d2e08c6-591e-40/korea"; // Import fake API

let data = {};

// Get the data from fake API
const fetchApi = async () => {
  try {
    let response = await axios.get(urlKorea);

    data = response.data.users.map((elm) => {
      return { userId: elm.user_id, firstName: elm.first_name };
    });

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

// Export function
module.exports = fetchApi;
