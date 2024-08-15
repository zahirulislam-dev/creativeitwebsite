import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import MobileAppDevelopment from '../../Components/MobileAppDevelopment/MobileAppDevelopment'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'

const MobileAppDevelopmentDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <Header/>
      <Navbar/>
      <MobileAppDevelopment/>
      <Footer/>
      <Footernav/>
    </div>
  )
}

export default MobileAppDevelopmentDetails