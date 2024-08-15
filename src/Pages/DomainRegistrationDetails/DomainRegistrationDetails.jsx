import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import DomainRegistration from '../../Components/DomainRegistration/DomainRegistration'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'

const DomainRegistrationDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <Header/>
      <Navbar/>
      <DomainRegistration/>
      <Footer/>
      <Footernav/>
    </div>
  )
}

export default DomainRegistrationDetails