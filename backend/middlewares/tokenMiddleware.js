const TokenService = require("../services/Token.js");

module.exports = function(req, res, next) {
  const headers = req.headers;
  if (!headers || !headers.token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized"
    });
  }

  const token = headers.token;
  try {
    TokenService.verifyToken(token);
  } catch (err) {
    const [statusCode, errMsg] = err.message.split(":");
    return res.status(Number(statusCode)).json({
      success: false,
      message: errMsg
    });
  }

  next();
}
