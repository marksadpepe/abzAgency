const express = require("express");
const PositionController = require("../controllers/Position.js");

const router = express.Router();

router.get("/positions", PositionController.getPositions);

module.exports = router;
