const router = require("express").Router();
const {
  getAllEntries,
  getMaxMagnitude,
} = require("../../../controllers/entries");

router.get("/", getAllEntries);

router.get("/maxmagnitude", getMaxMagnitude);

module.exports = router;
