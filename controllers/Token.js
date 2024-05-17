const TokenService = require("../services/Token.js");

class TokenController {
  getToken(req, res) {
    try {
      const token = TokenService.generateToken();
      return res.status(200).json({
        success: true,
        token: token
      });
    } catch (err) {
      console.error(`Failed to generate token: ${err.message}`);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error"
      });
    }
  }
}

module.exports = new TokenController();
