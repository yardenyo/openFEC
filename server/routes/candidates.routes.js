const express = require("express");
const CandidatesController = require("../controllers/candidates.controller.js");

const router = express.Router();

router.get("/", CandidatesController.getAll);

module.exports = router;
