const { Drone, Droneowner, Droneposition } = require('../models')
const axios = require('axios')

const saveDrones = async (droneData) => {
  const [drone, created] = await Drone.findOrCreate({
    where: { serialNumber: droneData.serialNumber },
    defaults: {
      lastSeen: droneData.timeSeen
    }
  })
  await Droneposition.create({
    raw: true,
    ...droneData,
    droneId: drone.id
  })

  if (created) {
    const { data } = await axios.get(
      `https://assignments.reaktor.com/birdnest/pilots/${droneData.serialNumber}`
    )
    if (data) {
      try {
        await Droneowner.create({
          ...data,
          droneId: drone.id
        })
      } catch (error) {
        console.error(error.message)
      }
    }
  } else {
    drone.lastSeen = droneData.timeSeen
    await drone.save()
  }
}

module.exports = { saveDrones }
