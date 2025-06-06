// const request = require("supertest");
// const assert = require("assert");
const express = require("express");

const app = express();
let requestCount = 0;

app.use((req, res, next) => {
  requestCount++;
  next();
});

// Routes
app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/requestCount", function (req, res) {
  res.status(200).json({ requestCount });
});

app.listen(3000, () => console.log("Server running on port 3000"));
module.exports = app;
