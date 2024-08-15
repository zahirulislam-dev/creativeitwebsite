import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import LpgProduct from '../../Components/LpgProduct/LpgProduct'
import LpgModules from '../../Components/LpgModules/LpgModules'
import LpgVideoScreenshot from '../../Components/LpgVideoScreenshot/LpgVideoScreenshot'

const LpgPosDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <LpgProduct></LpgProduct>
        <LpgModules></LpgModules>
        <LpgVideoScreenshot></LpgVideoScreenshot>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default LpgPosDetails