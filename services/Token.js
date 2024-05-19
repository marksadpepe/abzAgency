const crypto = require("crypto");

class TokenService {
  generateToken() {
    const expTimestamp = Date.now() + process.env.TOKEN_TTL * 60 * 1000;
    const randomBytes = crypto.randomBytes(32).toString("hex");
    const tokenData = `${randomBytes}:${expTimestamp}`;
    const token = Buffer.from(tokenData).toString("base64");

    return token;
  }

  verifyToken(token) {
    const [randomBytes, expTimestamp] = this.parseToken(token);
    if (!randomBytes || !expTimestamp) {
      throw new Error("400:Invalid token format");
    }

    if (Date.now() > parseInt(expTimestamp, 10)) {
      throw new Error("401:The token expired");
    }

    return randomBytes;
  }

  parseToken(token) {
    const tokenData = Buffer.from(token, "base64").toString("utf-8");
    return tokenData.split(":");
  }
}

module.exports = new TokenService();
