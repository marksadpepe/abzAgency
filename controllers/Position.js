const PositionService = require("../services/Position.js");

class PositionController {
  async getPositions(req, res) {
    try {
      const positions = await PositionService.getPositions();
      return res.status(200).json({
        success: true,
        positions: positions
      });
    } catch (err) {
      const [statusCode, errMsg] = err.message.split(":");
      return res.status(Number(statusCode)).json({
        success: false,
        message: errMsg
      });
    }
  }
}

module.exports = new PositionController();
