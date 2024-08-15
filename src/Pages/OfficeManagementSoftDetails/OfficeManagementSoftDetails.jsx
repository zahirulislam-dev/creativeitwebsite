import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import OfficeProduct from '../../Components/OfficeProduct/OfficeProduct'
import OfficeModules from '../../Components/OfficeModules/OfficeModules'
import OfficeVideoScreenshot from '../../Components/OfficeVideoScreenshot/OfficeVideoScreenshot'

const OfficeManagementSoftDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <OfficeProduct/>
        <OfficeModules/>
        <OfficeVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default OfficeManagementSoftDetails