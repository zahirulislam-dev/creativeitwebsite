import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import BrickFieldProduct from '../../Components/BrickFieldProduct/BrickFieldProduct'
import BrickFieldModules from '../../Components/BrickFieldModules/BrickFieldModules'
import BrickFieldVideoScreenshot from '../../Components/BrickFieldVideoScreenshot/BrickFieldVideoScreenshot'

const BrickFieldSoftDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <BrickFieldProduct/>
        <BrickFieldModules/>
        <BrickFieldVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default BrickFieldSoftDetails