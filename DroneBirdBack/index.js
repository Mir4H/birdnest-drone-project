const cron = require('node-cron')
const express = require('express')
require('express-async-errors')
const app = express()
const { PORT } = require('./utils/config')
const { connectToDatabase } = require('./utils/db')
const middleware = require('./utils/middleware')
const { getDroneData } = require('./utils/droneData')
const { deleteDrones } = require('./utils/deleteOldData')

const dronesRouter = require('./controllers/drones')

//app.use(express.static('build'))
app.use(express.json())

app.use('/api/drones', dronesRouter)

cron.schedule('*/2 * * * * *', () => {
  console.log('checking drone data every 2 seconds')
  getDroneData()
})

cron.schedule('*/15 * * * *', async () => {
  await deleteDrones()
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()
