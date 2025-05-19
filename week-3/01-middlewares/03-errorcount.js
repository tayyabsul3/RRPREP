const request = require("supertest");
const assert = require("assert");
const express = require("express");

const app = express();
let errorCount = 0;

app.get("/user", function (req, res) {
  throw new Error("User not found");
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/errorCount", function (req, res) {
  res.status(200).json({ errorCount });
});

app.use((err, req, res, next) => {
  errorCount++; // Increment error counter
  res.status(404).json({ error: "Not Found" }); // Return 404
});

module.exports = app;
