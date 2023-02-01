import React, { useContext } from 'react'
import ContextProvider from '../../context'
// Components
import Header from '../../components/header'
import Table from '../../components/table'

function AllProjects() {
  const { projects } = useContext(ContextProvider)
  return (
    <div className="page-wrapper">
      <Header title="Project List" />
      <Table rows={projects} />
    </div>
  )
}

export default AllProjects
