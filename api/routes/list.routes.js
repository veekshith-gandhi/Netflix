/** @format */

const authentication = require("../middleware/verify.token");
const { create, dele, get } = require("../controllers/list.controller");
const router = require("express").Router();

router.post("/", authentication, create);
router.delete("/:id", authentication, dele);
router.get("/", authentication, get);

module.exports = router;
