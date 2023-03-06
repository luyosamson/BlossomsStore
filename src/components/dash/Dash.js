import React,{useState} from 'react'
import Chart from "react-apexcharts";
import Dashboard from '../dashboard/Dashboard';
import './Dash.css'

function Dash() {
    const [state,setState]=useState(
        {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Mon","Tue", "Wed","Thu", "Fri", "Sat","Sun"]
        }
      },
      series: [
        {
          name: "Flowers",
          data: [30, 46, 40, 70, 79, 20, 80]
        },
          {
          name: "Plants",
          data: [40, 30, 45, 50, 49, 60, 70]
        }
      ]
    }
    )
  return (
    <div className='container'>
      <div className='dashboard'>
      <Dashboard/>
      </div>
      <div className='items-container'>
        <h2>Visualize Sales For The Last 7 Day</h2>
        <div className='row'>

            <div className='colum'>
                <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="900"
            />
            </div>

        </div>
        </div>
    </div>
  )
}

export default Dash