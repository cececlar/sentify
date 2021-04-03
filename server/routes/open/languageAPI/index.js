const router = require("express").Router();
const { verbalyzeUserInput } = require("../../../verbalyzer/index");

router.post("/", verbalyzeUserInput);

module.exports = router;
