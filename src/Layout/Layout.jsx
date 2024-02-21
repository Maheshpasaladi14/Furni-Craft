import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Router from '../Rouers/Router'

const Layout = () => {
  return (
    <div className=' bg-[#F8F9F9]'>
        <Header></Header>
        <div>
            <Router/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout