import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
// import Footer from './Footer/Footer'

const Dashboard = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        {/* <Footer/> */}
    </div>
  )
}

export default Dashboard