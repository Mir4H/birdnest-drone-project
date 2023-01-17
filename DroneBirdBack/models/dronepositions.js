const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class Droneposition extends Model {}

Droneposition.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    timeSeen: {
      type: DataTypes.DATE,
      allowNull: false
    },
    positionX: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    positionY: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    distance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'droneposition'
  }
)

module.exports = Droneposition
