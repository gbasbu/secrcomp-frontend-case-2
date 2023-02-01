import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import { Grid } from '@mui/material'

import './style.scss'

function Layout() {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={2}
        >
          <Sidebar />
        </Grid>
        <Grid
          item
          xs={10}
        >
          <Outlet />
        </Grid>
      </Grid>
    </>
  )
}

export default Layout
