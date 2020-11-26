const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    console.log(req.body);
    res.send({ token });
  } catch (error) {
    res.status(422).send(error.message);
  }
});

module.exports = router;
