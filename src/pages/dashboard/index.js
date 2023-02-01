import React, { useContext } from 'react'
import ContextProvider from '../../context'
import { Grid, Typography } from '@mui/material'
import './style.scss'

// Components
import Header from '../../components/header'
import Chart from '../../components/chart'

function Dashboard() {
  const { projects } = useContext(ContextProvider)

  return (
    <div>
      <Header title="Dashboard" />
      <div className="dashboard-wrapper">
        <Grid
          container
          spacing={5}
        >
          <Grid
            item
            xs={6}
          >
            <Chart
              title="Completed Projects"
              data={projects.filter(item => item.status === 'Completed')}
              color="#E38627"
            />
          </Grid>
          <Grid
            item
            xs={6}
          >
            <Chart
              title="Ongoing Projects"
              data={projects.filter(item => item.status === 'In Progress')}
              color="#C13C37"
            />
          </Grid>
          <Grid
            item
            xs={8}
          >
            <Typography>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long
              established fact that a...
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <Chart
              title="Next Projects"
              data={projects.filter(item => item.status === 'Next')}
              color="#3eaf7c"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Dashboard
