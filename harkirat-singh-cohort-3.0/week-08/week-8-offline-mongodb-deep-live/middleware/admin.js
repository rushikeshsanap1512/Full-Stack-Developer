const { Admin } = require("../db");

async function adminMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  await Admin.findOne({
    username: username,
    password: password,
  }).then(function (value) {
    if (value) {
      next();
    } else {
      res.status(403).json({
        msg: "User doesn't exist",
      });
    }
  });
}

module.exports = {
  adminMiddleware,
};
