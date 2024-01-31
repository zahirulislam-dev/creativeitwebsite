import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import BsposProduct from '../../Components/BsPosProduct/BsPosProduct'
import BsPosModules from '../../Components/BsPosModules/BsPosModules'
import BsPosVideoScreenshot from '../../Components/BsPosVideoScreenshot/BsPosVideoScreenshot'

const BsPosDetails = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <BsposProduct></BsposProduct>
        <BsPosModules></BsPosModules>
        <BsPosVideoScreenshot></BsPosVideoScreenshot>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default BsPosDetails