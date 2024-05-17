const PositionModel = require("./position.js");
const UserModel = require("./user.js");

PositionModel.hasOne(UserModel, {foreignKey: "position_id"});
UserModel.belongsTo(PositionModel, {foreignKey: "position_id"});

module.exports = {
  PositionModel,
  UserModel
};
