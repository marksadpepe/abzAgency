const path = require("path");
const multer = require("multer");
const sharp = require("sharp");

class File {
  getStorage() {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "public/images/users");
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
      }
    });

    return storage;
  }

  getUpload() {
    const upload = multer({
      storage: this.getStorage(),
      limits: {
        fileSize: 5 * 1024 * 1024
      },
      fileFilter: function (req, file, cb) {
        const filetypesRegex = /jpeg|jpg/;
        const mimetype = filetypesRegex.test(file.mimetype);
        const ext = filetypesRegex.test(path.extname(file.originalname).toLowerCase().replace(".", ""));

        if (mimetype && ext) {
          return cb(null, true);
        }

        cb(new Error("Only jpeg or jpg files are allowed"));
      }
    });

    return upload;
  }

  async getImageResolution(filePath) {
    const metadata = await sharp(filePath).metadata();
    return {width: metadata.width, height: metadata.height};
  }
}

module.exports = new File();
