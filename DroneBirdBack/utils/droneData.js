const axios = require('axios')
const xml2js = require('xml2js')
const { saveDrones } = require('./dronesToDb')
const droneDataUrl = 'https://assignments.reaktor.com/birdnest/drones'
const parser = new xml2js.Parser({ explicitArray: false })

const calculateDistance = (x, y) => {
  const center = 250000.0
  const distance =
    Math.sqrt((parseFloat(x) - center) ** 2 + (parseFloat(y) - center) ** 2) /
    1000
  return distance
}

const calculateViolation = (x, y) => {
  const radius = 100.0
  const violation = calculateDistance(x, y) < radius
  return violation
}

const getDroneData = async () => {
  try {
    const { data } = await axios.get(droneDataUrl)
    const droneCapture = await parser.parseStringPromise(data)
    const snapTime = droneCapture.report.capture.$.snapshotTimestamp
    const dronelist = droneCapture.report.capture.drone

    dronelist.map((item) => {
      if (calculateViolation(item.positionX, item.positionY)) {
        const violatorDrone = {
          ...item,
          distance: calculateDistance(item.positionX, item.positionY),
          timeSeen: snapTime
        }
        saveDrones(violatorDrone)
      }
    })
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = { getDroneData }
