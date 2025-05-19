const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("");

// Admin Schema
const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// User Schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

// Course Schema
const CourseSchema = new mongoose.Schema({
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  title: { type: String, required: true },
  description: String,
  price: Number,
  imageLink: String,
  published: { type: Boolean, default: false },
});

// Models
const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

// Export
module.exports = {
  Admin,
  User,
  Course,
};
