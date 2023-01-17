const { Drone } = require('../models')
const { Op } = require('sequelize')

const deleteDrones = async () => {
  console.log('deleting old data')
  try {
    await Drone.destroy({
      where: {
        lastSeen: { [Op.lt]: new Date(Date.now() - 61 * 10 * 1000) }
      }
    })
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = { deleteDrones }
