const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../utils/db')

class Droneowner extends Model {}

Droneowner.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  droneSerial: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  firstName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  lastName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}, {
  sequelize,
  underscored: true,
  timestamps: true,
  modelName: 'droneowner'
})

module.exports = Droneowner