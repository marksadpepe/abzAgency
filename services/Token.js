const crypto = require("crypto");

class TokenService {
  generateToken() {
    const token = crypto.randomBytes(32).toString("hex");
    return token;
  }
}

module.exports = new TokenService();
