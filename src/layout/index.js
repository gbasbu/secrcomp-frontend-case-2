import React from 'react'
import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material'

// Component
import Sidebar from '../components/sidebar'
import Modal from '../components/modal'

import './style.scss'

function Layout() {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={3}
          lg={2}
          style={{ borderRight: '2px solid black' }}
        >
          <Sidebar />
        </Grid>
        <Grid
          item
          xs={9}
          lg={10}
        >
          <Outlet />
        </Grid>
      </Grid>
      {/* Modal */}
      <Modal />
    </>
  )
}

export default Layout
