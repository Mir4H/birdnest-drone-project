const Drone = require('./drone')
const Droneowner = require('./droneowner')

Droneowner.hasMany(Drone)
Drone.belongsTo(Droneowner)

module.exports = {
  Drone,
  Droneowner
}
