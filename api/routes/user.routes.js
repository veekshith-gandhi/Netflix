/** @format */

const {
  update,
  delet,
  get,
  getALl,
} = require("../controllers/user.controller");
const authentication = require("../middleware/verify.token");
const router = require("express").Router();

//update id/password
router.patch("/:id", authentication, update);
router.delete("/:id", authentication, delet);
router.get("/find/:id", get);
router.get("/:id", authentication, getALl);

module.exports = router;
