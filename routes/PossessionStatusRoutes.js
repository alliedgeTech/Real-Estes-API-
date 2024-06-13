const express = require("express");
const {
    createPossessionStatus,
    getPossessionStatuses,
    getPossessionStatusById,
    updatePossessionStatus,
    deletePossessionStatus,
} = require("../controllers/PossessionStatusController");

const router = express.Router();

router.post("/", createPossessionStatus);
router.get("/", getPossessionStatuses);
router.get("/:id", getPossessionStatusById);
router.put("/:id", updatePossessionStatus);
router.delete("/:id", deletePossessionStatus);

module.exports = router;
