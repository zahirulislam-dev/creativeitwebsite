import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import CposProduct from '../../Components/CposProduct/CposProduct'
import CposModules from '../../Components/CposModules/CposModules'
import CposVideoScreenshot from '../../Components/CposVideoScreenshot/CposVideoScreenshot'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'

const CposDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <CposProduct></CposProduct>
        <CposModules></CposModules>
        <CposVideoScreenshot></CposVideoScreenshot>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default CposDetails