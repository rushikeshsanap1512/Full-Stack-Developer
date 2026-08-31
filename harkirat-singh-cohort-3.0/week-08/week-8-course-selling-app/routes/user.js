// const express = require('express');
// const Router = express.Router;

const { Router } = require("express");
const userRouter = Router();
const { usersModel, purchaseModel, courseModel } = require("../db");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");
const { userMiddleware } = require("../middleware/user");

userRouter.post("/signup", async (req, res) => {
  const requireBody = z.object({
    email: z
      .string()
      .min(3)
      .max(100)
      .refine((e) => e.includes("@")),
    password: z.string().min(3).max(30),
    firstName: z.string().min(2).max(20),
    lastName: z.string().min(3).max(20),
  });

  const parseDataWithSuccess = requireBody.safeParse(req.body);

  if (!parseDataWithSuccess.success) {
    res.json({
      message: "Incorrect format",
      error: parseDataWithSuccess.error,
    });
    return;
  }

  const { email, password, firstName, lastName } = req.body;

  const hashPassword = await bcrypt.hash(password, 5);

  try {
    await usersModel.create({
      email: email,
      password: hashPassword,
      firstName: firstName,
      lastName: lastName,
    });

    res.json({
      message: "signed up succeeded.",
    });
  } catch (error) {
    res.json({
      message: "Email already exists",
    });
  }
});

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const response = await usersModel.findOne({
    email: email,
  });

  if (!response) {
    res.json({
      message: "User does not exist in our db",
    });
    return;
  }

  const passwordMatch = await bcrypt.compare(password, response.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_USER_PASSWORD,
    );

    res.json({
      token: token,
    });
  } else {
    res.json({
      message: "Invalid credentials",
    });
  }
});

userRouter.get("/purchases", userMiddleware, async (req, res) => {
  const userId = req.userId;

  const purchases = await purchaseModel.find({
    userId,
  });

  const coursesData = await courseModel.find({
    _id: { $in: purchases.map((x) => x.courseId) },
  });

  res.json({
    purchases,
    coursesData,
  });
});

module.exports = {
  userRouter: userRouter,
};
