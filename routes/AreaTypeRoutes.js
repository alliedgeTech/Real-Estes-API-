const express = require("express");
const {
    createAreaType,
    getAreaTypes,
    getAreaTypeById,
    updateAreaType,
    deleteAreaType,
} = require("../controllers/AreaTypeController");

const router = express.Router();

router.post("/", createAreaType);
router.get("/", getAreaTypes);
router.get("/:id", getAreaTypeById);
router.put("/:id", updateAreaType);
router.delete("/:id", deleteAreaType);

module.exports = router;
