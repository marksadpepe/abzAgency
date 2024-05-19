const PositionModel = require("./position.js");
const UserModel = require("./user.js");

PositionModel.hasOne(UserModel, {foreignKey: "positionId"});
UserModel.belongsTo(PositionModel, {foreignKey: "positionId"});

module.exports = {
  PositionModel,
  UserModel
};
