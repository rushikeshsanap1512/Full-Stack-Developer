const { Router } = require("express");
const { adminModel, courseModel } = require("../db");
const bcrypt = require("bcrypt");
const z = require("zod");
const adminRouter = Router();
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_SECRET } = require("../config");
const { adminMiddleware } = require("../middleware/admin");

adminRouter.post("/signup", async (req, res) => {
  const requireBody = z.object({
    email: z
      .string()
      .min(3)
      .max(100)
      .refine((email) => email.includes("@")),
    password: z.string().min(3).max(30),
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
  });

  const parseDataWithSuccess = requireBody.safeParse(req.body);

  if (!parseDataWithSuccess.success) {
    res.json({
      message: "Incorrect format",
      error: parseDataWithSuccess.error,
    });
    return;
  }

  // const email = req.body.email;
  // const password = req.body.password;
  // const firstName = req.body.firstName;
  // const lastName = req.body.lastName;

  const { email, password, firstName, lastName } = req.body;

  const hashPassword = await bcrypt.hash(password, 5);

  await adminModel.create({
    email: email,
    password: hashPassword,
    firstName: firstName,
    lastName: lastName,
  });

  res.json({
    message: "signup endpoint",
  });
});

adminRouter.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const response = await adminModel.findOne({
    email: email,
  });

  if (!response) {
    res.status(403).json({
      message: "User does not exist in our db",
    });
    return;
  }

  const passwordMathch = await bcrypt.compare(password, response.password);

  if (passwordMathch) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_ADMIN_SECRET,
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

adminRouter.post("/course", adminMiddleware, async (req, res) => {
  const adminId = req.userId;
  const { title, description, price, imageUrl, creatorId } = req.body;

  console.log("Creating course");
  console.log("adminId:", adminId);

  const course = await courseModel.create({
    title: title,
    description: description,
    price: price,
    imageUrl: imageUrl,
    creatorId: adminId,
  });

  res.json({
    message: "course created",
    courseId: course._id,
  });
});

adminRouter.put("/course", adminMiddleware, async (req, res) => {
  const adminId = req.userId;
  const { title, description, price, imageUrl, courseId } = req.body;

  console.log("Updating course");
  console.log("adminId:", adminId);
  console.log("courseId:", courseId);

  const course = await courseModel.updateOne(
    {
      _id: courseId,
      creatorId: adminId,
    },
    {
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
    },
  );

  res.json({
    message: "Course updated",
    courseId: courseId,
  });
});

adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    message: "bulk endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
