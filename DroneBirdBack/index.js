const express = require('express')
const app = express()
const { PORT } = require('./utils/config')
const { connectToDatabase } = require('./utils/db')

const dronesRouter = require('./controllers/drones')
const droneownersRouter = require('./controllers/droneowners')

app.use(express.json())

app.use('/api/drones', dronesRouter)
app.use('/api/droneowners', droneownersRouter)

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()
