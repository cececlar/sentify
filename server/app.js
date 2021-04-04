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

module.exports = app;
