import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import WebDevelopment from '../../Components/WebDevelopment/WebDevelopment'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'

const WebDevelopmentDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <Header/>
      <Navbar/>
      <WebDevelopment/>
      <Footer/>
      <Footernav/>
    </div>
  )
}

export default WebDevelopmentDetails