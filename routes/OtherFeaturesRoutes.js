const express = require("express");
const {
    createOtherFeatures,
    getOtherFeatures,
    getOtherFeaturesById,
    updateOtherFeatures,
    deleteOtherFeatures,
} = require("../controllers/OtherFeaturesController");

const router = express.Router();

router.post("/", createOtherFeatures);
router.get("/", getOtherFeatures);
router.get("/:id", getOtherFeaturesById);
router.put("/:id", updateOtherFeatures);
router.delete("/:id", deleteOtherFeatures);

module.exports = router;
