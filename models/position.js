const sql = require("../db.js");
const {DataTypes} = require("sequelize");

const Position = sql.define("Position",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    tableName: "positions",
    timestamps: false
  }
);

module.exports = Position;
