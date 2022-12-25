import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import styles from './Header.module.css'
import { Grid } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

export function Header() {
  return (
    <AppBar position="static" >
      <Toolbar>
        <Grid container>
          <Grid item xs={3}>
            <Typography
              variant="h4"
              component="div"
            >
              Chat Rooms
            </Typography></Grid>
          <Grid item xs={2} />
          <Grid item xs={7}>
            {/* <nav>
          <ul>
            <li> */}
            <Button color="inherit">Home</Button>
            {/* </li>
            <li> */}
            <Button color="inherit">Profile</Button>
            {/* </li>
            <li> */}
            <Button color="inherit">Chat</Button>
            {/* </li>
          </ul>
        </nav> */}</Grid></Grid>
      </Toolbar>
    </AppBar>
  );
}