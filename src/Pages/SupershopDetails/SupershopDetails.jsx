import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import SupershopProduct from '../../Components/SupershopProduct/SupershopProduct'
import SupershopModules from '../../Components/SupershopModules/SupershopModules'
import VideoScreenshot from '../../Components/VideoScreenshot/VideoScreenshot'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'

const SupershopDetails = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <SupershopProduct></SupershopProduct>
        <SupershopModules></SupershopModules>
        <VideoScreenshot></VideoScreenshot>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default SupershopDetails