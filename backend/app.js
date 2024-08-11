const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/services", (req, res) => {
  res.send("this is services page.");
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.listen(1000, () => {
  console.log("SERVER STARTED SUCCESSFULLY");
});
