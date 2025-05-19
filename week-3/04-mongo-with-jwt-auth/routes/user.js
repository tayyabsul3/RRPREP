const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  try {
    const NewAdmin = new User(req.body);
    await NewAdmin.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (e) {
    res.status(500).json({ message: "Error creating user", error: e });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find();
    res.status(201).json({ Courses: courses });
  } catch (e) {
    res.status(500).json({ message: "Error Fetching Courses", error: e });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const id = req.params.courseId;
    const userId = req.user._id;
    const course = await Course.findById(id);
    const user = await User.findById(userId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    if (user.purchasedCourses.includes(course._id)) {
      return res.status(400).json({ message: "Course already purchased" });
    }
    user.purchasedCourses.push(course._id);
    await user.save();
    res.status(201).json({ message: "Course purchased successfully" });
  } catch (e) {
    res.status(500).json({ message: "Error purchasing course", error: e });
  }
});
router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  const token = jwt.sign({ username, password }, "secret");
  if (!user) {
    return res.status(401).json({ message: "User Not Found" });
  }
  res.status(200).json({ token: token });
});
router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findById(req.user._id)
    .populate("purchasedCourses")
    .exec();
  console.log(user);
  res.json({
    message: "Purchased courses",
    purchasedCourses: user.purchasedCourses,
  });
});

module.exports = router;
