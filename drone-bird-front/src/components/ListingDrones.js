import React from 'react'
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Divider,
  ListItemText,
  Typography,
} from '@mui/material'
import { blue } from '@mui/material/colors'

const ListingDrones = ({drones}) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {drones.map((item) => (
        <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[400], fontSize: 18 }}>
                {item.droneowner.firstName.charAt(0)}
                {item.droneowner.lastName.charAt(0)}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`Drone ${item.serialNumber} owned by ${item.droneowner.firstName} ${item.droneowner.lastName}`}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Contacts: {item.droneowner.phoneNumber} |{' '}
                    {item.droneowner.email}
                  </Typography>
                  <br />{' '}
                  {`Drone's closest distance to the nest: ${item.distance} meters, at ${item.timeSeen}}`}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  )
}

export default ListingDrones
