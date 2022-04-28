/** @format */

const authentication = require("../middleware/verify.token");
const router = require("express").Router();

// Delete

router.get("/:id", authentication);

module.exports = router;
