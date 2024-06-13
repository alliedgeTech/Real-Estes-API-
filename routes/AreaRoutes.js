const express = require("express");
const {
    createArea,
    getAreas,
    getAreaById,
    updateArea,
    deleteArea,
} = require("../controllers/AreaController");

const router = express.Router();

router.post("/", createArea);
router.get("/", getAreas);
router.get("/:id", getAreaById);
router.put("/:id", updateArea);
router.delete("/:id", deleteArea);

module.exports = router;
