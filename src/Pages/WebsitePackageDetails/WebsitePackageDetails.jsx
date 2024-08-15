import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import WebsitePackage from '../../Components/WebsitePackage/WebsitePackage'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'

const WebsitePackageDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
        <Header/>
        <Navbar/>
        <WebsitePackage/>
        <Footer/>
        <Footernav/>
    </div>
  )
}

export default WebsitePackageDetails