const PositionDto = require("../dtos/Position.js");
const PositionModel = require("../models/position.js");

class Position {
  async createPosition(name) {
    const candidate = await PositionModel.findOne({
      where: {name: name}
    });

    if (candidate) {
      throw new Error("409:Position with this name already exists");
    }

    const position = await PositionModel.create({name});
    return new PositionDto(position);
  }

  async getPositions() {
    try {
      const positions = await PositionModel.findAll();
      if (!positions || positions.length == 0) {
        throw new Error("404:Positions not found");
      }

      const positionsData = [];
      positions.forEach(position => positionsData.push(new PositionDto(position)));

      return positionsData;
    } catch (err) {
      // TODO: refactoring in required
      if (err.message.includes("404")) {
        throw new Error(err.message);
      }
      console.error(err.message);
      throw new Error("500:Internal Server Error");
    }
  }

  async getPositionById(positionId) {
    try {
      const position = await PositionModel.findOne({
        where: {id: positionId}
      });
      if (!position) {
        throw new Error("404:Position not found");
      }

      return new PositionDto(position);
    } catch (err) {
      if (err.message.includes("404")) {
        throw new Error(err.message);
      }
      console.error(err.message);
      throw new Error("500:Internal Server Error");
    }
  }
}

module.exports = new Position();
