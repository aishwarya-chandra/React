import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>                         {/* dynamically renders home, about and other components among heaader and footer */}
        <Footer />
        </>
  )
}

export default Layout