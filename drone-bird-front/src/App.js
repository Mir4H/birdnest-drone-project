import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [drones, setDrones] = useState()
  const getDrone = async () => {
    try {
      const droneData = await axios.get('/api/drones')
      setDrones(droneData.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getDrone()
  }, [])

  if (!drones)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )

  return (
    <div>
      <h1>Got the data!</h1>
      <p>{drones[0].serialNumber}</p>
    </div>
  )
}

export default App
