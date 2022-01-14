import React from 'react'
import { useState, useContext } from 'react'
import BarChart from '../../Components/AllChart/BarChart'
import { DashboardContext } from '../../context/DashboardContext'
import './DashboardFinance.css'


export default function DashboardFinance() {

      const { dataChart, changeYear, yearData } = useContext(DashboardContext)


      return (
            <div className="global-container">
                  <h1>LES RESULTATS DE L'ANNEE: {yearData}</h1>

                  <form>
                        <label htmlFor='year'>Choississez une date.</label>
                        <select onChange={changeYear} id='year'>
                              <option value=" 2021"> 2021</option>
                              <option value=" 2020"> 2020</option>
                              <option value=" 2019"> 2019</option>
                              <option value=" 2018"> 2018</option>
                        </select>
                  </form>
                  <div className="dashboard-container">
                        <BarChart data={dataChart.chart1} name={"chiffres bimestriels"} />
                  </div>
            </div>
      )
}
