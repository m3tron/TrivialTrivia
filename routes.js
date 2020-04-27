const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const Score = require("./models/Score");

const router = express.Router();

// Find user, create if not found, return jwt and user info
router.post("/user", async (req, res) => {
  const { authId } = req.body;

  try {
    let user = await User.findOne({ authId });

    if (!user) {
      user = await User.create({ authId });
      console.log(user);
      return res.status(201).json(user);
    }
    console.log(user);
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(501).send("Server Error");
  }
});

module.exports = router;
