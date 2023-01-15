import { useEffect, useRef } from 'react'
import { Grid, Box, Card } from '@mui/material'

const Canvas = ({ drones }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //birdnest center
    ctx.fillStyle = '#303030'
    ctx.beginPath()
    ctx.arc(275, 275, 6, 0, 2 * Math.PI)
    ctx.fill()

    //NDZ line
    ctx.strokeStyle = '#e57373'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.arc(275, 275, 250, 0, 2 * Math.PI)
    ctx.stroke()

    //Drone text and example
    ctx.beginPath()
    ctx.font = '14px Arial'
    ctx.fillStyle = 'black'
    ctx.textAlign = 'start'
    ctx.fillText('DRONES =', 15, 495)
    ctx.stroke()

    //Drone example
    ctx.fillStyle = '#303030'
    ctx.beginPath()
    ctx.arc(110, 515, 6, 0, 2 * Math.PI)
    ctx.fill()

    //Birdnest text
    ctx.beginPath()
    ctx.font = '14px Arial'
    ctx.fillStyle = 'black'
    ctx.textAlign = 'start'
    ctx.fillText('BIRDNEST =', 15, 520)
    ctx.stroke()

    //Birdnest example
    ctx.lineWidth = 0.8
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.arc(105, 489, 11, 0, 2 * Math.PI)
    ctx.stroke()

    drones.forEach((item) => {
      const initials = `${item.droneowner.firstName.charAt(0)}${item.droneowner.lastName.charAt(0)}`

      //Draw drone
      ctx.lineWidth = 0.6
      ctx.beginPath()
      ctx.strokeStyle = 'black'
      ctx.arc(
        (item.positionX * 2.5) / 1000 - 350,
        900 - (item.positionY * 2.5) / 1000,
        14,
        0,
        2 * Math.PI
      )
      ctx.stroke()

      //Draw initials
      ctx.font = '12px Arial'
      ctx.textAlign = 'center'
      ctx.fillStyle = '#303030'
      ctx.fillText(
        initials,
        (item.positionX * 2.5) / 1000 - 350,
        904 - (item.positionY * 2.5) / 1000
      )
      ctx.stroke()
    })
  }, [drones])

  return (
    <Box component={Grid} item sm={12} lg={6}>
      <Card style={{ display: 'flex', justifyContent: 'center' }}>
        <canvas width={550} height={550} ref={canvasRef} />
      </Card>
    </Box>
  )
}

export default Canvas
