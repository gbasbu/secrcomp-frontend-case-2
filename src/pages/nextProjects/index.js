import React, { useContext } from 'react'
import ContextProvider from '../../context'
// Components
import Header from '../../components/header'
import Table from '../../components/table'

function NextProjects() {
  const { projects } = useContext(ContextProvider)
  return (
    <div className="page-wrapper">
      <Header title="Next Projects" />
      <Table rows={projects.filter(item => item.status === 'Next')} />
    </div>
  )
}

export default NextProjects
