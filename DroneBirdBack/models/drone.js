const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../utils/db')

class Drone extends Model {}

Drone.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  serialNumber: {
    type: DataTypes.TEXT,
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
  },
  timeSeen: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'drone'
})

module.exports = Drone