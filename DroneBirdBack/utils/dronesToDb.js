const { Drone, Droneowner } = require('../models')
const axios = require('axios')

const saveDrones = async (droneData) => {
  const droneowner = await Droneowner.findOne({
    where: { droneSerial: droneData.serialNumber }
  })
  if (droneowner) {
    try {
      await Drone.create({
        ...droneData,
        droneownerId: droneowner.id
      })
    } catch (error) {
      console.error(error.message)
    }
  } else {
    const { data } = await axios.get(
      `https://assignments.reaktor.com/birdnest/pilots/${droneData.serialNumber}`
    )
    if (data) {
      try {
        const pilot = await Droneowner.create({
          ...data,
          droneSerial: droneData.serialNumber,
        })
        await Drone.create({
          ...droneData,
          droneownerId: pilot.id
        })
      } catch (error) {
        console.error(error.message)
      }
    }
  }
}

module.exports = { saveDrones }
