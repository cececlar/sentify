const router = require("express").Router();
const { getAllEntries } = require("../../../controllers/entries");

router.get("/", getAllEntries);

module.exports = router;
