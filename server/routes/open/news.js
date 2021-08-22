const router = require("express").Router(),
  { searchNews } = require("../../apiCalls/news"),
  { verbalyzeNews } = require("../../apiCalls/language");

router.post("/", searchNews);
router.post("/verbalyzenews", verbalyzeNews);

module.exports = router;
