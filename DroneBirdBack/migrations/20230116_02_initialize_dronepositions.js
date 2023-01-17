const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('dronepositions', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    await queryInterface.addColumn('dronepositions', 'drone_id', {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: { model: 'drones', key: 'id' }
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('dronepositions')
  },
}
