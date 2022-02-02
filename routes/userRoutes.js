const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/userModel.js");

// register
router.post("/register", async (request, response) => {
  try {
    const newUser = new User(request.body);
    await newUser.save();
    response.send("user registered successfully");
  } catch (error) {
    console.log(error);
    return response.status(400).json(error);
  }
});

// login route
router.post("/login", async (request, response) => {
  const { username, password } = request.body;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      console.log(user.name);
      const loggedInUser = {
        name: user.name,
        _id: user._id,
        email: user.email,
        image: user.image,
        isAdmin: user.isAdmin,
      };
      response.send(loggedInUser);
    } else {
      return response.status(400).json(error);
    }
  } catch (error) {
    console.log(error);
    return response.status(400).json(error);
  }
});

// updating user profile

router.post("/updateuser", async (request, response) => {
  try {
    const { userid, updatedValue } = request.body;
    await User.findByIdAndUpdate(userid, {
      name: updatedValue.name,
      email: updatedValue.email,
      username: updatedValue.username,
      image: updatedValue.image,
    });
    response.send("user updated successfully");
  } catch (error) {
    console.log(error);
  }
});

// Get all users

router.get("/getallusers", async (request, response) => {
  try {
    const users = await User.find();
    response.send(users);
  } catch (error) {
    console.log(error);
    return response.status(400).json(error);
  }
});

// Deleting user
router.post("/deleteuser", async (request, response) => {
  try {
    await User.findByIdAndRemove(request.body.userid);
    response.send("user deleted successfully");
  } catch (error) {
    console.log(error);
    return response.status(400).json(error);
  }
});

// Editing user type
router.post("/edituser", async (request, response) => {
  try {
    const { userid, editedValue } = request.body;
    await User.findByIdAndUpdate(userid, {
      isAdmin: editedValue.isAdmin,
    });
    response.send("user updated successfully");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
