import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import ElectronicsProduct from '../../Components/ElectronicsProduct/ElectronicsProduct'
import ElectronicsModules from '../../Components/ElectronicsModules/ElectronicsModules'
import ElectronicsVideoScreenshot from '../../Components/ElectronicsVideoScreenshot/ElectronicsVideoScreenshot'

const ElectroPosDetails = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <ElectronicsProduct></ElectronicsProduct>
        <ElectronicsModules></ElectronicsModules>
        <ElectronicsVideoScreenshot></ElectronicsVideoScreenshot>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default ElectroPosDetails