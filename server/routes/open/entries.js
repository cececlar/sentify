const router = require("express").Router();
const { getAllEntries, getMaxMagnitude } = require("../../controllers/entries");
const { verbalyzeEntry } = require("../../controllers/entries");

router.post("/", verbalyzeEntry);

router.get("/", getAllEntries);

router.get("/maxmagnitude", getMaxMagnitude);

module.exports = router;
