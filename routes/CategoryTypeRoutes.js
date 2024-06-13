const express = require("express");
const {
    createCategoryType,
    getCategoryTypes,
    getCategoryTypeById,
    updateCategoryType,
    deleteCategoryType,
} = require("../controllers/CategoryTypeController");

const router = express.Router();

router.post("/", createCategoryType);
router.get("/", getCategoryTypes);
router.get("/:id", getCategoryTypeById);
router.put("/:id", updateCategoryType);
router.delete("/:id", deleteCategoryType);

module.exports = router;
