import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import WebDesignDevelopment from '../../Components/WebDesignDevelopment/WebDesignDevelopment'

const WebDesignDevelopmentDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <WebDesignDevelopment/>
    </div>
  )
}

export default WebDesignDevelopmentDetails