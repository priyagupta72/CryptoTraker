// const express = require("express");
// const router = express.Router();
// const users = require("../models/users");
// const bcrypt = require("bcrypt");

// router.post("/login", async (req, res) => {
//   const isEmailthere = await users.findOne({ email: req.body.email });

//   if (isEmailthere === null) {
//     return res.json({
//       status: false,
//       message: "User is not present please sigin",
//     });
//   } else {
//     const checkPassword = bcrypt.compareSync(
//       req.body.password,
//       isEmailthere.password
//     );

//     if (checkPassword) {
//       return res.json({
//         status: "true",
//         message: "logged in",
//       });
//     } else {
//       return res.json({ status: false, message: "Incorrect password" }); // Incorrect password
//     }
//   }
// });

// router.post("/createuser", async (req, res) => {
//   const isUserPresent = await users.findOne({ email: req.body.email });
//   console.log(isUserPresent);

//   if (isUserPresent !== null) {
//     return res.json({ status: false, message: "User is already present" });
//   } else {
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(req.body.password, salt);
//     const creatingUser = await users.create({
//       name: req.body.name,
//       email: req.body.email,
//       password: hash,
//     });

//     return res.json({
//       status: true,
//       message: "logged in",
//     });
//   }
// });

// module.exports = router;




const express = require("express");
const router = express.Router();
const users = require("../models/users");
const bcrypt = require("bcrypt");

// LOGIN ROUTE
router.post("/login", async (req, res) => {
  try {
    const user = await users.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found. Please sign up first.",
      });
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

// SIGNUP ROUTE
router.post("/createuser", async (req, res) => {
  try {
    const existingUser = await users.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please login.",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = await users.create({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
