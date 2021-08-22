const router = require("express").Router(),
  { searchNews } = require("../../../usearch/index"),
  { verbalyzeNews } = require("../../../verbalyzer/index");

router.post("/", searchNews);
router.post("/verbalyzenews", verbalyzeNews);

module.exports = router;
