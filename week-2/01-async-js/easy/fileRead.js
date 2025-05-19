// file: async-file-read.js
import fs from "node:fs/promises";
import { writeFile } from "node:fs/promises";

// Start reading the file
fs.readFile("./1-counter.md", "utf8")
  .then((data) => {
    console.log("✅ File read complete. Content:");
    console.log(data);
  })
  .catch((err) => {
    console.error("❌ Error reading file:", err);
  });

// Simulate expensive operation
console.log("⏳ Starting expensive computation...");

let total = 0;
for (let i = 0; i < 1e9; i++) {
  total += i;
}

console.log("🧠 Expensive computation done. Result:", total);

// file: async-write-file.js

console.log("🟡 Starting to write to file...");

writeFile("output.txt", "This is an async write using fs/promises!", "utf8")
  .then(() => {
    console.log("✅ File write complete!");
  })
  .catch((err) => {
    console.error("❌ Error writing to file:", err);
  });

// Simulate another task
console.log("🧠 Doing something else while writing the file...");
