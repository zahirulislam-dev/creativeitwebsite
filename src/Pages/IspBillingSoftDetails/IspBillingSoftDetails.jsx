import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import IspProduct from '../../Components/IspProduct/IspProduct'
import IspModules from '../../Components/IspModules/IspModules'
import IspVideoScreenshot from '../../Components/IspVideoScreenshot/IspVideoScreenshot'

const IspBillingSoftDetails = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <IspProduct></IspProduct>
        <IspModules></IspModules>
        <IspVideoScreenshot></IspVideoScreenshot>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default IspBillingSoftDetails