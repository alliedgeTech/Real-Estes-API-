const express = require("express");
const {
  createPropertyfor,
  getPropertyfor,
  getPropertyforById,
  updatePropertyfor,
  deletePropertyfor,
} = require("../controllers/PropertyforController");

const router = express.Router();

router.post("/", createPropertyfor);
router.get("/", getPropertyfor);
router.get("/:id", getPropertyforById);
router.put("/:id", updatePropertyfor);
router.delete("/:id", deletePropertyfor);

module.exports = router;
