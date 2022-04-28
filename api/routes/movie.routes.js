/** @format */

const authentication = require("../middleware/verify.token");
const {
  create,
  delet,
  get,
  getRandom,
} = require("../controllers/movies.controller");
const router = require("express").Router();

// Delete

router.post("/", authentication, create);
router.put("/:id", authentication, create);
router.put("/:id", authentication, delet);
router.put("/random", authentication, getRandom);
router.put("/:id", authentication, get);

module.exports = router;
