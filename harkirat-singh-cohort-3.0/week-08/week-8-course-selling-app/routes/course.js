const { Router } = require("express");

const courseRouter = Router();

courseRouter.post("/course/purchase", (req, res) => {
  res.json({
    message: "purchase endpoint",
  });
});

courseRouter.get("/course/preview", (req, res) => {
  res.json({
    message: "preview endpoint",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
