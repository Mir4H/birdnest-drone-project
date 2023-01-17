const router = require('express').Router()
const { Drone, Droneowner, Droneposition } = require('../models')
const { sequelize } = require('../utils/db')
const { Op } = require('sequelize')

router.get('/', async (req, res) => {
  const dronePositions = await Droneposition.findAll({
    attributes: [
      'drone_id',
      [sequelize.fn('MIN', sequelize.col('distance')), 'min_distance']
    ],
    raw: true,
    group: ['drone_id'],
    where: {
      timeSeen: {
        [Op.gt]: new Date(Date.now() - (60 * 10 * 1000))
      }
    }
  })

  const closestDrones = await Promise.all(
    dronePositions.map(async (drone) => {
      return await Drone.findOne({
        where: {
          [Op.and]: [{ id: drone.drone_id }]
        },
        raw: true,
        nest: true,
        include: [{
          model: Droneowner,
        },{
          model: Droneposition,
          where: {
            distance: drone.min_distance
          }
        }]

      })
    })
  )

  res.json(closestDrones)
})

module.exports = router
