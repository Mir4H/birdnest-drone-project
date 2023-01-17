const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../utils/db')

class Drone extends Model {}

Drone.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    serialNumber: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lastSeen: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'drone'
  }
)

module.exports = Drone
