const { DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('drones', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      serial_number: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      last_seen: {
        type: DataTypes.DATE,
        allowNull: false
      }
    })
  },
  down: async () => {
    await sequelize.query('DROP TABLE IF EXISTS "drones" CASCADE;')
  },
}
