const { Drone, Droneowner, Droneposition } = require('../models')
const axios = require('axios')

const saveDrones = async (droneData) => {
  try {
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
      try {
        const { data } = await axios.get(
          `https://assignments.reaktor.com/birdnest/pilots/${droneData.serialNumber}`
        )
        await Droneowner.create({
          ...data,
          droneId: drone.id
        })
      } catch (error) {
        console.error(error.message)
        drone.destroy()
      }
    } else {
      drone.lastSeen = droneData.timeSeen
      await drone.save()
    }
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = { saveDrones }
