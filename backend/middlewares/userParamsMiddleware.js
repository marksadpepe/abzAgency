module.exports = function(req, res, next) {
  if (!req.params || !req.params.id) {
    return res.status(400).json({
      success: false,
      message: "The user ID must be non-empty"
    });
  }

  const userId = req.params.id;
  if (!Number(userId)) {
    return res.status(400).json({
      success: false,
      message: "The user with the requested ID does not exist",
      fails: {
        userId: [
          "The user must be an integer"
        ]
      }
    });
  }
  req.params.id = Number(userId);

  next();
}
