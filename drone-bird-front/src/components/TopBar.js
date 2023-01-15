import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import FlutterDashIcon from '@mui/icons-material/FlutterDash'

const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Drones that disturb the bird's peace
          </Typography>
          <FlutterDashIcon fontSize="large" />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default TopBar
