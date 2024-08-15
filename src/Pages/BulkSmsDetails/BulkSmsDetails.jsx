import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import BulkSms from '../../Components/BulkSms/BulkSms'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'

const BulkSmsDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
        <Header/>
        <Navbar/>
        <BulkSms/>
        <Footer/>
        <Footernav/>
    </div>
  )
}

export default BulkSmsDetails