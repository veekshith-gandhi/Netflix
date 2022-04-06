/** @format */

const update = require("../controllers/user.controller");
const authentication = require("../middleware/verify.token");
const router = require("express").Router();

//update id/password
router.patch("/:id", authentication, update);

module.exports = router;
