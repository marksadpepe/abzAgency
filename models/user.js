const sql = require("../db.js");
const {DataTypes} = require("sequelize");

const User = sql.define("User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    position_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "positions",
        key: "id"
      }
    },
    photo: {
      type: DataTypes.STRING,
      defaultValue: "defaultProfilePic.jpg"
    }
  },
  {
    tableName: "users",
    timestamps: false
  }
);

module.exports = User;
