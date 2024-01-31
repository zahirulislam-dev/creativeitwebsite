import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import AgroPoultryProduct from '../../Components/AgroPoultryProduct/AgroPoultryProduct'
import AgroPoultryModules from '../../Components/AgroPoultryModules/AgroPoultryModules'
import AgroPoultryVideoScreenshot from '../../Components/AgroPoultryVideoScreenshot/AgroPoultryVideoScreenshot'

const AgroPoultryPosDetails = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <AgroPoultryProduct/>
        <AgroPoultryModules/>
        <AgroPoultryVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default AgroPoultryPosDetails