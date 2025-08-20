// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const cors = require("cors");

// const dbConnection = require("./dbConnection");

// app.use(express.json());
// app.use(cors());

// app.use("/api/v1", require("./routes/routes"));

// app.listen(3001, () => {
//   dbConnection();
//   console.log("App is listening");
// });


const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

const dbConnection = require("./dbConnection");

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1", require("./routes/routes"));

// DB connection and server start
const PORT = process.env.PORT || 3001;

dbConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("❌ Failed to connect to DB", err);
});
