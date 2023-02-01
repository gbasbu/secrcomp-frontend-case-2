import React, { useContext } from 'react'
import ContextProvider from '../../context'

// Components
import Header from '../../components/header'
import Table from '../../components/table'

function CompletedProjects() {
  const { projects } = useContext(ContextProvider)
  return (
    <div className="page-wrapper">
      <Header title="Completed Projects" />
      <Table rows={projects.filter(item => item.status === 'Completed')} />
    </div>
  )
}

export default CompletedProjects
