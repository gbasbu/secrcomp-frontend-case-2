import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Grid } from '@mui/material'

function Table({ rows }) {
  // Table columns
  const columns = [
    { field: 'name', headerName: 'Project Name', width: 250 },
    { field: 'startDate', headerName: 'Start Date', width: 250 },
    { field: 'endDate', headerName: 'End Date', width: 250 },
    { field: 'status', headerName: 'Status', width: 250 }
  ]

  return (
    <Grid
      container
      style={{ height: 500, display: 'flex', justifyContent: 'center', paddingTop: '50px' }}
    >
      <Grid
        item
        xs={10}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[6]}
          disableSelectionOnClick
        />
      </Grid>
    </Grid>
  )
}

export default Table
