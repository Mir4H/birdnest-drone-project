import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TopBar from './components/TopBar'

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
      <TopBar />
      <ul>
        {drones.map((item) => (
          <>
          <li>{item.serialNumber} | {item.droneowner.firstName} {item.droneowner.lastName}</li>
          <li>{item.droneowner.phoneNumber} | {item.droneowner.email} | {item.distance}</li>
          </>
        ))}
      </ul>
    </div>
  )
}

export default App
