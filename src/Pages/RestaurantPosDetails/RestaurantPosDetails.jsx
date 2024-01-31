import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import RestaurantProduct from '../../Components/RestaurantProduct/RestaurantProduct'
import RestaurantModules from '../../Components/RestaurantModules/RestaurantModules'
import RestaurantVideoScreenshot from '../../Components/RestaurantVideoScreenshot/RestaurantVideoScreenshot'

const RestaurantPosDetails = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <RestaurantProduct></RestaurantProduct>
        <RestaurantModules></RestaurantModules>
        <RestaurantVideoScreenshot></RestaurantVideoScreenshot>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default RestaurantPosDetails