import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import DiagnosticProduct from '../../Components/DiagnosticProduct/DiagnosticProduct'
import DiagnosticModules from '../../Components/DiagnosticModules/DiagnosticModules'
import DiagnosticVideoScreenshot from '../../Components/DiagnosticVideoScreenshot/DiagnosticVideoScreenshot'

const DiagnosticSoftDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <DiagnosticProduct/>
        <DiagnosticModules/>
        <DiagnosticVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default DiagnosticSoftDetails