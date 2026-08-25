const { Router } = require("express");

const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});

adminRouter.post("/signin", (req, res) => {
  res.json({
    message: "signin endpoint",
  });
});

adminRouter.post("/course", (req, res) => {
    res.json({
        message: "admin course endpoint"
    });
});

adminRouter.put("/course", (req, res) => {
    res.json({
        message: "admin course endpoint"
    });
});

adminRouter.get("/course/bulk", (req, res) => {
    res.json({
        message: "bulk endpoint"
    });
});

module.exports = {
    adminRouter: adminRouter
};