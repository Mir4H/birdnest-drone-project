const Drone = require('./drone')
const Droneowner = require('./droneowner')
const Droneposition = require('./dronepositions')

Drone.hasOne(Droneowner, {
  onDelete: 'CASCADE'
})
Drone.hasMany(Droneposition, {
  onDelete: 'CASCADE'
})
Droneposition.belongsTo(Drone)

module.exports = {
  Drone,
  Droneowner,
  Droneposition
}
