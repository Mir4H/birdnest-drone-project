const router = require('express').Router()
const { Droneowner } = require('../models')

router.get('/', async (req, res) => {
  const droneowners = await Droneowner.findAll()
  res.json(droneowners)
})

module.exports = router