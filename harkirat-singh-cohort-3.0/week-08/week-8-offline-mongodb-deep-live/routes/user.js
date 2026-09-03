const express = require("express");
const userRouter = express.Router();
const { userMiddleware } = require("../middleware/user");
const { Admin, User, Course } = require("../db");

userRouter.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username,
    password,
  });

  res.json({
    message: "User created succesfully.",
  });
});

userRouter.get("/courses", userMiddleware, async (req, res) => {
  const response = await User.find({});

  res.json({
    courses: response,
  });
});

userRouter.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      "$push": {
        purchasedCourses: courseId
      }
    },
  ).catch((e) => {
    console.log(e);
  });

  res.json({
    message: "Purchase complete",
  });
});

userRouter.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const user = await User.findOne({
    username: req.headers.username
  });
  console.log(user.purchasedCourses);
  const courses = await Course.find({
    _id: {
      "$in": user.purchasedCourses
    }
  });

  res.json({
    courses: courses
  });
});

module.exports = {
  userRouter,
};
