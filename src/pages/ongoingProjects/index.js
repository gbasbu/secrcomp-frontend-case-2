import React, { useContext } from 'react'
import ContextProvider from '../../context/index'
// Components
import Header from '../../components/header'
import Table from '../../components/table'

function OngoingProjects() {
  const { projects } = useContext(ContextProvider)
  return (
    <div className="page-wrapper">
      <Header title="Ongoing Projects" />
      <Table rows={projects.filter(item => item.status === 'In Progress')} />
    </div>
  )
}

export default OngoingProjects
