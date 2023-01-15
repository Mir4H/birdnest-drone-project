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
      position_x: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      position_y: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      distance: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      time_seen: {
        type: DataTypes.DATE,
        allowNull: false
      }
    })
    await queryInterface.createTable('droneowners', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      drone_serial: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      first_name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      last_name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      phone_number: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE
      },
      updated_at: {
        type: DataTypes.DATE
      }
    })
    await queryInterface.addColumn('drones', 'droneowner_id', {
      type: DataTypes.INTEGER,
      references: { model: 'droneowners', key: 'id' }
    })
  },
  down: async () => {
    await sequelize.query('DROP TABLE IF EXISTS "droneowners" CASCADE;')
    await sequelize.query('DROP TABLE IF EXISTS "drones" CASCADE;')
  }
}
