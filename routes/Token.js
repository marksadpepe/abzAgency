const express = require("express");
const TokenController = require("../controllers/Token.js");

const router = express.Router();

router.get("/token", TokenController.getToken);

module.exports = router;
