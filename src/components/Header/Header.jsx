import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Header.module.css'

export const navigate = [
  {
    id: 1,
    name: 'Home',
    to: '/'
  },
  {
    id: 2,
    name: 'Profile',
    to: '/profile'
  },
  {
    id: 3,
    name: 'Chat',
    to: '/chats'
  },
]

export function Header() {
  return (
    <>
      <AppBar position="static" >
        <Toolbar>
          <Grid container>
            <Grid item xs={6} md={3}>
              <Typography
                variant="h4"
                component="div"
              >
                Chat Rooms
              </Typography>
            </Grid>

            <Grid item xs={3} md={5}>
              <nav className={styles.header}>
                <ul>
                  {navigate.map((link) => (
                    <li key={link.id}>
                      <NavLink
                        to={link.to}
                        style={({ isActive }) => ({
                          color: isActive ? 'yellow' : 'white'
                        })}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </Grid>
            <Grid item xs={0} md={4} />
          </Grid>
        </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
    </>
  );
}