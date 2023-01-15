const { Drone } = require('../models')
const { Op } = require('sequelize')
const { sequelize } = require('../utils/db')
const deleteDrones = async () => {
  console.log('deleting old data')
  try {
    await Drone.destroy({
      where: {
        timeSeen: { [Op.lte]: new Date(Date.now() - (60 * 11 * 1000)) }
      }
    })
  } catch (error) {
    console.error(error.message)
  }
}

const deleteDroneOwners = async () => {
  try {
    await sequelize.query(
      'DELETE FROM droneowners WHERE drone_serial not IN (SELECT serial_number FROM drones)'
    )
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = { deleteDrones, deleteDroneOwners }
