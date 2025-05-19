const { Admin } = require("../db");
const jwt = require("jsonwebtoken");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  const { Authorization } = req.headers;
  const token = Authorization && Authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const decoded = jwt.verify(token, "secret");
  const admin = await Admin.findOne({
    username: decoded.username,
    password: decoded.password,
  });
  if (!admin) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.admin = admin;
  next();
}

module.exports = adminMiddleware;
