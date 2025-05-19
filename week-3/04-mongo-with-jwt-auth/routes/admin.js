const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");

// Admin Routes
router.post("/signup", async (req, res) => {
  try {
    const NewAdmin = new Admin(req.body);
    await NewAdmin.save();
    res.status(201).json({ message: "Admin created successfully" });
  } catch (e) {
    res.status(500).json({ message: "Error creating admin", error: e });
  }
});
router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username, password });
  const token = jwt.sign({ username, password }, "secret");
  if (!admin) {
    return res.status(401).json({ message: "Admin Not Found" });
  }
  res.status(200).json({ token: token });
});
router.post("/courses", adminMiddleware, async (req, res) => {
  try {
    const NewCourse = new Course({ ...req.body, adminId: req.admin.id });
    await NewCourse.save();
    res.status(200).json({
      message: "Course created successfully",
      courseId: NewCourse.id,
    });
  } catch (e) {
    res.status(500).json({ message: "Error creating course", error: e });
  }
  // Implement course creation logic
});

router.get("/courses", adminMiddleware, async (req, res) => {
  try {
    // Implement fetching all courses logic
    const courses = await Course.find({ adminId: req.admin.id });
    res.status(200).json(courses);
  } catch (e) {
    res.status(500).json({ message: "Error fetching courses", error: e });
  }
});

module.exports = router;
// xhtoHTZAl46rN6kH
