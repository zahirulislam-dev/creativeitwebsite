import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import WebAppDevelopment from '../../Components/WebAppDevelopment/WebAppDevelopment'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'

const WebAppDevelopmentDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <Header/>
      <Navbar/>
      <WebAppDevelopment/>
      <Footer/>
      <Footernav/>
    </div>
  )
}

export default WebAppDevelopmentDetails