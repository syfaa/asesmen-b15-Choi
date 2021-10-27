// Import data from dataHanguk in models
let data = require("../models/dataHanguk.json");

// Make Data controller class
class Data {
  // Make getAllData
  getAllData(req, res) {
    try {
      let listName = data.map((elm) => elm.first_name);

      // Send response to client with status 200 (OK) and {users: data}
      res.status(200).json({ users: listName });
    } catch (error) {
      // If something wrong or error it will send response to client with status 500 and {errors: ["Internet server error"]}
      res.status(500).json({
        errors: ["Internet Server Error"],
      });
    }
  }

  // Make getDetailData
  getDetailData(req, res) {
    try {
      // Find data by req.params.user_id
      let detailData = data.filter(
        (elm) => elm.user_id === parseInt(req.params.user_id)
      );

      if (detailData.length === 0) {
        //   Send response to client, when data not found
        return res.status(500).json({ errors: ["Data not found!"] });
      }

      // Send response to client with status 200 (OK) and {user: data.user_id}
      res.status(200).json({ User: detailData });
    } catch (error) {
      // If something wrong or error it will send response to client with status 500 and {errors: ["Internet server error"]}
      res.status(500).json({
        errors: ["Internet Server Error"],
      });
    }
  }

  // Make addData
  addData() {
    window.alert("Ini adalah fungsi add data");
  }
}

// Exports Data Class
module.exports = new Data();
