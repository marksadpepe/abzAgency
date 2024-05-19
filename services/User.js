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
    user.dataValues.createdAt = this.convertDateToTimestamp(user.dataValues.createdAt);

    return new UserDto(user);
  }

  async getUsers() {
    const users = await UserModel.findAll();
    if (!users) {
      throw new Error("404:Users not found");
    }

    const usersData = [];
    users.forEach(async(user) => {
      const position = await PositionService.getPositionById(user.dataValues.positionId);
      user.dataValues.position = position.name;
      user.dataValues.createdAt = this.convertDateToTimestamp(user.dataValues.createdAt);
      usersData.push(new UserDto(user));
    });

    return usersData;
  }

  async getUserById(userId) {
    const user = await UserModel.findByPk(userId);
    if (!user) {
      throw new Error("404:User not found");
    }

    const position = await PositionService.getPositionById(user.dataValues.positionId);
    user.dataValues.position = position.name;
    user.dataValues.createdAt = this.convertDateToTimestamp(user.dataValues.createdAt);

    return new UserDto(user);
  }

  convertDateToTimestamp(dateString) { // maybe moved into another Service
    const date = new Date(dateString);
    return Math.floor(date.getTime() / 1000);
  }
}

module.exports = new UserService();
