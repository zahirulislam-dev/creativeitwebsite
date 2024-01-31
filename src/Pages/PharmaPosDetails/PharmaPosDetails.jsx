import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import PharmaPosProduct from '../../Components/PharmaPosProduct/PharmaPosProduct'
import PharmaPosVideoScreenshot from '../../Components/PharmaPosVideoScreenshot/PharmaPosVideoScreenshot'
import PharmaPosModules from '../../Components/PharmaPosModules/PharmaPosModules'

const PharmaPosDetails = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <PharmaPosProduct></PharmaPosProduct>
        <PharmaPosModules/>
        <PharmaPosVideoScreenshot></PharmaPosVideoScreenshot>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default PharmaPosDetails