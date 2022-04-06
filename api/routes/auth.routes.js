/** @format */

const { register, login } = require("../controllers/auth.controller");
const router = require("express").Router();

router.post("/register", register);
router.get("/login", login);

module.exports = router;
