import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Context from './context'
// Components
import Dashboard from './pages/dashboard'
import AllProjects from './pages/allProjects'
import OngoingProjects from './pages/ongoingProjects'
import NextProjects from './pages/nextProjects'
import CompletedProjects from './pages/completedProjects'

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

// Context provider data
const data = {
  list
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Context.Provider value={data}>
      {/* Set router provider with router variable */}
      <RouterProvider router={router} />
    </Context.Provider>
  </>
)
