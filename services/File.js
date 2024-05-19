const path = require("path");
const multer = require("multer");

class File {
  getStorage() {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "public/profilePics");
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
}

module.exports = new File();
