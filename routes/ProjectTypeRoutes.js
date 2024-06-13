const express = require("express");
const {
  createProjectType,
  getProjectTypes,
  getProjectTypeById,
  updateProjectType,
  deleteProjectType,
} = require("../controllers/ProjectTypeController");

const router = express.Router();

router.post("/", createProjectType);
router.get("/", getProjectTypes);
router.get("/:id", getProjectTypeById);
router.put("/:id", updateProjectType);
router.delete("/:id", deleteProjectType);

module.exports = router;
