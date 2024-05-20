module.exports = function(req, res, next) {
  const fails = {
    count: ["The count must be an integer"],
    page: ["The page must be at least 1"]
  }

  // maybe required refactoring in one if statement
  if (!req.query || !req.query.page || !req.query.count) {
    return res.status(422).json({
      success: false,
      message: "Validation failed",
      fails
    });
  }

  const page = Number(req.query.page);
  const count = Number(req.query.count);

  if (!page || page < 1) {
    return res.status(422).json({
      success: false,
      message: "Validation failed",
      fails: {
        page: fails.page
      }
    });
  }

  if (!count || count < 1) {
    return res.status(422).json({
      success: false,
      message: "Validation failed",
      fails: {
        count: fails.count
      }
    });
  }

  req.query.page = page;
  req.query.count = count;

  next();
}
