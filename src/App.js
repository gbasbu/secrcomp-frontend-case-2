import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Components
import Dashboard from './pages/dashboard'
import AllProjects from './pages/allProjects'
import OngoingProjects from './pages/ongoingProjects'
import NextProjects from './pages/nextProjects'
import CompletedProjects from './pages/completedProjects'
import Layout from './layout'
import Context from './context'

export default function App() {
  // Create router variable
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Dashboard />
        },
        {
          path: 'allProjects',
          element: <AllProjects />
        },
        {
          path: 'ongoingProjects',
          element: <OngoingProjects />
        },
        {
          path: 'nextProjects',
          element: <NextProjects />
        },
        {
          path: 'completedProjects',
          element: <CompletedProjects />
        }
      ]
    }
  ])

  // Sidebar list items array
  const list = [
    {
      text: 'Dashboard',
      link: '/',
      pageTitle: 'Dashboard'
    },
    {
      text: 'Projects',
      link: 'allProjects',
      pageTitle: 'Project List'
    },
    {
      text: 'Ongoing Projects',
      link: 'ongoingProjects',
      pageTitle: 'Ongoing Projects'
    },
    {
      text: 'Next Projects',
      link: 'nextProjects',
      pageTitle: 'Next Projects'
    },
    {
      text: 'Completed Projects',
      link: 'completedProjects',
      pageTitle: 'Completed Projects'
    }
  ]

  // Projects Data
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Project 1',
      startDate: '01.02.2022',
      endDate: '01.02.2023',
      status: 'Completed'
    },
    {
      id: 2,
      name: 'Project 2',
      startDate: '05.02.2022',
      endDate: '05.02.2023',
      status: 'In Progress'
    },
    {
      id: 3,
      name: 'Project 3',
      startDate: '01.02.2021',
      endDate: '01.02.2023',
      status: 'Completed'
    },
    {
      id: 4,
      name: 'Project 4',
      startDate: '06.06.2023',
      endDate: '01.02.2025',
      status: 'Next'
    },
    {
      id: 5,
      name: 'Project 5',
      startDate: '01.12.2023',
      endDate: '01.01.2026',
      status: 'Next'
    },
    {
      id: 6,
      name: 'Project 6',
      startDate: '01.02.2020',
      endDate: '01.02.2024',
      status: 'In Progress'
    }
  ])

  // Context provider data
  const data = {
    list,
    projects,
    setProjects
  }

  return (
    // Set context provider with context data
    <Context.Provider value={data}>
      {/* Set router provider with router variable */}
      <RouterProvider router={router} />
    </Context.Provider>
  )
}
