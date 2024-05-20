const tinify = require("tinify");

class Tinify {
  constructor() {
    tinify.key = process.env.TINIFY_API_KEY;
  }

  compressAndResizeImage(srcImg, dstImg) {
    const src = tinify.fromFile(srcImg);
    const resized = src.resize({
      method: "cover",
      width: 70,
      height: 70
    });
    resized.toFile(dstImg);

    return dstImg;
  }
}

module.exports = new Tinify();
