require("./db/config/index");
const express = require("express"),
  app = express(),
  morgan = require("morgan"),
  entryRoutes = require("./routes/open/entries"),
  newsRoutes = require("./routes/open/news");

app.use(express.json());

app.use(morgan("dev"));

// Open routes: GET entries from DB, GET max magnitude score, POST new entry
app.use("/api/entries", entryRoutes);

// Open routes: Search news, get sentiment scores for news
// TODO: Adjust HTTP methods to reflect CRUD
app.use("/api/news", newsRoutes);

//TODO: Add error handling middleware and clean up redundant error handling in controller functions.

module.exports = app;
