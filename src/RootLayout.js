import React from 'react'
import {Outlet} from 'react-router-dom'
import Navi from './components/navigationBar/Navi'
import Footer from './components/footer/Footer'

function RootLayout() {
  return (
    <div>
        {/* navigation bar */}
      <Navi />
    <Outlet />
    <Footer/>
    </div>
  )
}

export default RootLayout