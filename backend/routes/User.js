const express = require("express");
const UserController = require("../controllers/User.js");
const FileService = require("../services/File.js");
const tokenMdw = require("../middlewares/tokenMiddleware.js");
const fileUploadMwd = require("../middlewares/fileUploadMiddleware.js");
const fileTinifyMdw = require("../middlewares/fileTinifyMiddleware.js");
const userParamsMdw = require("../middlewares/userParamsMiddleware.js");
const paginationMdw = require("../middlewares/paginationMiddleware.js");
const bodyPayloadMdw = require("../middlewares/bodyPayloadMiddleware.js");

const router = express.Router();
const upload = FileService.getUpload();

router.get("/users", paginationMdw, UserController.getUsers);
router.get("/users/:id", userParamsMdw, UserController.getUser);
router.post("/users", tokenMdw, upload.single("profilePic"), fileUploadMwd, fileTinifyMdw, bodyPayloadMdw, UserController.registerUser);

module.exports = router;
