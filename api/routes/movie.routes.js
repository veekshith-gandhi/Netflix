/** @format */

const authentication = require("../middleware/verify.token");
const {
  create,
  getAll,
  delet,
  get,
  getRandom,
} = require("../controllers/movies.controller");
const router = require("express").Router();

// Delete

router.post("/", authentication, create);
router.put("/:id", authentication, create);
router.delete("/:id", authentication, delet);
router.get("/random", authentication, getRandom);
router.get("/find/:id", authentication, get);
router.get("/all/:id", authentication, getAll);

module.exports = router;
