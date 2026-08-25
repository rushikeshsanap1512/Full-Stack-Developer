const express = require("express");
const app = express();

app.post("/user/signup", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});

app.post("/user/signin", (req, res) => {
  res.json({
    message: "signin endpoint",
  });
});

app.get("/user/purchases", (req, res) => {
  res.json({
    message: "purchases endpoint",
  });
});

app.post("/course/purchase", (req, res) => {
  res.json({
    message: "purchase endpoint",
  });
});

app.get("/course/preview", (req, res) => {
  res.json({
    message: "preview endpoint",
  });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})