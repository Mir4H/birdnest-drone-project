const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('droneowners', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
      }
    })
    await queryInterface.addColumn('droneowners', 'drone_id', {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: { model: 'drones', key: 'id' }
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('droneowners')
  },
}
