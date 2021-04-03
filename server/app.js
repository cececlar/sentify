const express = require("express"),
  app = express(),
  morgan = require("morgan");

app.use(express.json());

app.use(morgan("dev"));

app.use("/api", (req, res) => {
  res.json("hello world!");
});

module.exports = app;
