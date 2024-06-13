const express = require("express");
const {
    createBedrooms,
    getBedrooms,
    getBedroomsById,
    updateBedrooms,
    deleteBedrooms,
} = require("../controllers/BedroomsController");

const router = express.Router();

router.post("/", createBedrooms);
router.get("/", getBedrooms);
router.get("/:id", getBedroomsById);
router.put("/:id", updateBedrooms);
router.delete("/:id", deleteBedrooms);

module.exports = router;
