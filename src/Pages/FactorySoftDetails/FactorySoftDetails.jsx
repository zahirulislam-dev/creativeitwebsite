import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import FactoryProduct from '../../Components/FactoryProduct/FactoryProduct'
import FactoryModules from '../../Components/FactoryModules/FactoryModules'
import FactoryVideoScreenshot from '../../Components/FactoryVideoScreenshot/FactoryVideoScreenshot'

const FactorySoftDetails = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <FactoryProduct/>
        <FactoryModules/>
        <FactoryVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default FactorySoftDetails