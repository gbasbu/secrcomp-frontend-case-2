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
  const labels = ['', '']
  const datasets = [
    {
      data: [getPercentValue(), projects.length],
      backgroundColor: ['#003f5c', '#58508d']
    }
  ]

  return (
    <div className="chart-wrapper">
      <div>
        <div>{title}</div>
        <div style={{ marginTop: '15px' }}>%{getPercentValue()}</div>
      </div>
      <div className="chart">
        <PieChart
          data={[
            { title: title, value: getPercentValue(), color: color },
            { title: title, value: 100, color: '#6A2135' }
          ]}
        />
      </div>
    </div>
  )
}

export default Chart
