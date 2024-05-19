const fs = require("fs");
const UserDto = require("../dtos/User.js");
const UserModel = require("../models/user.js");
const PositionService = require("./Position.js");

class UserService {
  async createUser(name, email, phone, positionId, photo) {
    const candidateEmail = await UserModel.findOne({
      where: {email}
    });
    const candidatePhone = await UserModel.findOne({
      where: {phone}
    });

    if (candidateEmail || candidatePhone) {
      fs.rmSync(photo);
      throw new Error("409:User with this phone or email already exist")
    }

    const position = await PositionService.getPositionById(positionId);
    const user = await UserModel.create({
      name, email, phone, positionId, photo
    });
    user.dataValues.position = position.name;

    return new UserDto(user);
  }

  async getUserById(userId) {
    const user = await UserModel.findByPk(userId);
    if (!user) {
      throw new Error("404:User not found");
    }

    const position = await PositionService.getPositionById(user.dataValues.positionId);
    user.dataValues.position = position.name;

    return new UserDto(user);
  }
}

module.exports = new UserService();
