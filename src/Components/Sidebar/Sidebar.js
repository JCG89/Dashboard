import React from 'react'
import { Link } from 'react-router-dom'
import iconDashboard from './analytics.svg'
import './Sidebar.css'

export default function Sidebar() {
      return (
            <nav className="sidenav">
                  <img src={iconDashboard} alt=" iconcube" />
                  <Link to="/">FINANCES</Link>
                  <Link to="/emploi">EMPLOI</Link>
            </nav>
      )
}
