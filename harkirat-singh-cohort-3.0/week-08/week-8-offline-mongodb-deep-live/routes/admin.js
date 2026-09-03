const express = require("express");
const { adminMiddleware } = require("../middleware/admin");
const adminRouter = express.Router();
const { Admin, Course } = require("../db");

adminRouter.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  });

  res.json({
    message: "Admin created successfully",
  });
});

adminRouter.post("/courses", adminMiddleware, async (req, res) => {
  const { title, description, imageLink, price } = req.body;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  console.log(newCourse);

  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

adminRouter.get("/courses", adminMiddleware, (req, res) => {
  Course.find({})
    .then(function (response) {
      res.json({
        courses: response
      });
  })
});

module.exports = {
  adminRouter,
};
