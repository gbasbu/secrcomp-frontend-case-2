import React, { useContext } from 'react'
import ContextProvider from '../../context'
import { PieChart } from 'react-minimal-pie-chart'

import './style.scss'

function Chart({ title, data, color }) {
  const { projects } = useContext(ContextProvider)

  const getPercentValue = () => {
    return Math.floor((100 * data.length) / projects.length)
  }

  // Chart configration
  const datasets = [
    { title: title, value: getPercentValue(), color: color },
    { title: title, value: 100, color: '#6A2135' }
  ]

  return (
    <div className="chart-wrapper">
      <div>
        <div>{title}</div>
        <div style={{ marginTop: '15px' }}>%{getPercentValue()}</div>
      </div>
      <div className="chart">
        <PieChart data={datasets} />
      </div>
    </div>
  )
}

export default Chart
