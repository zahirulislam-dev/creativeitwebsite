import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'

const ContactDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
        <Header/>
        <Navbar/>
        <Contact/>
        <Footer/>
        <Footernav/>
    </div>
  )
}

export default ContactDetails