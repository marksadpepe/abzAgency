const sql = require("../db.js");
const {DataTypes} = require("sequelize");

const Position = sql.define("Position",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: "positions",
    timestamps: false
  }
);

module.exports = Position;
