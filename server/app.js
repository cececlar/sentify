require("./db/config/index");
const express = require("express"),
  app = express(),
  morgan = require("morgan");
(languageAPIRoutes = require("./routes/open/languageAPI/index")),
  (entryRoutes = require("./routes/open/entries/index"));

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/verbalyze", languageAPIRoutes);

app.use("/api/entries", entryRoutes);

//TODO: Add error handling middleware and clean up redundant error handling in controller functions.

module.exports = app;
