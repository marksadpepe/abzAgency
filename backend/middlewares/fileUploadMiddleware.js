module.exports = function(err, req, res, next) {
  if (err.code == "LIMIT_FILE_SIZE") {
    return res.status(422).json({
      success: false,
      message: "The photo may not be greater than 5 Mbytes"
    });
  } else if (!err.code) {
    return res.status(422).json({
      success: false,
      message: err.message
    });
  }

  next();
}
