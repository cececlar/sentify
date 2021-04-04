require("./db/config/index");
const express = require("express"),
  app = express(),
  morgan = require("morgan");
languageAPIRoutes = require("./routes/open/languageAPI/index");

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/verbalyze", languageAPIRoutes);

module.exports = app;
