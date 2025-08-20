// const mongoose = require("mongoose");

// const uri =
// "mongodb+srv://CryptoTracker:IA2Gldi5q6BQSeFZ@cluster0.v34v3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// function dbConnection() {
//   mongoose
//     .connect(uri)
//     .then((response) => {
//       console.log("DB CONNECT SUCCESS");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// module.exports = dbConnection;


const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = dbConnection;

