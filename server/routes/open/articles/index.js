const router = require("express").Router();
const { searchNews } = require("../../../usearch/index");

router.post("/", searchNews);

module.exports = router;
