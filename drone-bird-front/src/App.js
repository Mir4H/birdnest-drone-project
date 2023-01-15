import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TopBar from './components/TopBar'
import ListingDrones from './components/ListingDrones'
import Canvas from './components/Canvas'
import Grid from '@mui/material/Grid'

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
    const interval = setInterval(() => {
      console.log('new data')
      getDrone()
    }, 20000)
    return () => clearInterval(interval)
  }, [])

  if (!drones)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )

  return (
    <div>
      <TopBar/>
      <Grid container>
        <ListingDrones drones={drones} />
        <Canvas drones={drones} />
      </Grid>
    </div>
  )
}

export default App
