const mongoose = require("mongoose");

const uri =
"mongodb+srv://CryptoTracker:IA2Gldi5q6BQSeFZ@cluster0.v34v3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

function dbConnection() {
  mongoose
    .connect(uri)
    .then((response) => {
      console.log("DB CONNECT SUCCESS");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;
