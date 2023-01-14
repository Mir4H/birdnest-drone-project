const express = require('express')
require('express-async-errors')
const app = express()
const { PORT } = require('./utils/config')
const { connectToDatabase } = require('./utils/db')

const middleware = require('./utils/middleware')
const dronesRouter = require('./controllers/drones')
const droneownersRouter = require('./controllers/droneowners')

app.use(express.json())

app.use('/api/drones', dronesRouter)
app.use('/api/droneowners', droneownersRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()
