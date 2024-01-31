import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import HospitalProduct from '../../Components/HospitalProduct/HospitalProduct'
import HospitalModules from '../../Components/HospitalModules/HospitalModules'
import HospitalVideoScreenshot from '../../Components/HospitalVideoScreenshot/HospitalVideoScreenshot'

const HospitalSoftDetails = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <HospitalProduct/>
        <HospitalModules/>
        <HospitalVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default HospitalSoftDetails