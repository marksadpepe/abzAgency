const path = require("path");
const fs = require("fs");
const FileService = require("../services/File.js");

module.exports = async function(req, res, next) {
  const fileFullPath = path.join(process.env.DIRNAME, req.file.path);
  if (!fs.existsSync(fileFullPath)) {
    console.error(`File ${fileFullPath} does not exists`);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }

  const {width, height} = await FileService.getImageResolution(fileFullPath);
  if (width < 70 || height < 70) {
    fs.rmSync(fileFullPath);

    return res.status(422).json({
      success: false,
      message: "Minimum size of photo 70x70px"
    });
  }

  req.file.path = fileFullPath;
  next();
}
