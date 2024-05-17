const PositionDto = require("../dtos/Position.js");
const PositionModel = require("../models/position.js");

class Position {
  async getPositions() {
    try {
      const positions = await PositionModel.findAll();
      if (!positions) {
        throw new Error("404:Positions not found");
      }

      const positionsData = [];
      positions.forEach(position => positionsData.push(new PositionDto(position)));

      return positionsData;
    } catch (err) {
      console.error(err.message);
      throw new Error("500:Internal Server Error");
    }
  }
}

module.exports = new Position();
