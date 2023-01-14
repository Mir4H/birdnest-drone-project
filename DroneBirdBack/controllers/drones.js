const router = require('express').Router()
const { Drone } = require('../models')

router.get('/', async (req, res) => {
  const drones = await Drone.findAll()
  res.json(drones)
})


module.exports = router

