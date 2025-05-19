const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  const { username, password } = req.headers;
  const admin = await Admin.findOne({ username, password });
  if (!admin) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.admin = admin;
  next();
}

module.exports = adminMiddleware;
