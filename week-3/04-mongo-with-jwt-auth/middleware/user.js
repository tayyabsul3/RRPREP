const { User } = require("../db");
const jwt = require("jsonwebtoken");
async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const { id } = req.headers;

  const decoded = jwt.verify(id, "secret");
  const user = await User.findOne({
    username: decoded.username,
    password: decoded.password,
  });
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.user = user;
  next();
}

module.exports = userMiddleware;
