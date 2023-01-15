const router = require('express').Router()
const { Drone, Droneowner } = require('../models')
const { sequelize } = require('../utils/db')
const { Op } = require('sequelize')

router.get('/', async (req, res) => {
  const allDrones = await Drone.findAll({
    attributes: [
      'serial_number',
      [sequelize.fn('MIN', sequelize.col('distance')), 'min_distance']
    ],
    raw: true,
    group: ['serial_number'],
    where: {
      timeSeen: {
        [Op.gt]: new Date(Date.now() - (60 * 10 * 1000))
      }
    }
  })
  const closestDrones = await Promise.all(
    allDrones.map(async (drone) => {
      const serial = drone.serial_number
      const distance = drone.min_distance
      return await Drone.findOne({
        where: {
          [Op.and]: [{ serialNumber: serial }, { distance: distance }]
        },
        raw: true,
        nest: true,
        attributes: { exclude: ['droneownerId'] },
        include: {
          model: Droneowner,
          attributes: { exclude: ['droneSerial', 'createdAt', 'updatedAt'] }
        }
      })
    })
  )
  res.json(closestDrones)
})

module.exports = router
