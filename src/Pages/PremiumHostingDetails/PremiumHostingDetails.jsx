import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import PremiumHosting from '../../Components/PremiumHosting/PremiumHosting'
import WebHostingPackage from '../../Components/WebHostingPackage/WebHostingPackage'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'

const PremiumHostingDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <Header/>
      <Navbar/>
      <PremiumHosting/>
      <WebHostingPackage/>
      <Footer/>
      <Footernav/>
    </div>
  )
}

export default PremiumHostingDetails