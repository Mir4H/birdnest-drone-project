const router = require('express').Router()
const { Droneowner, Drone } = require('../models')

router.get('/', async (req, res) => {
  const droneowners = await Droneowner.findAll({
    include: {
      model: Drone
    }
  })
  res.json(droneowners)
})

module.exports = router
