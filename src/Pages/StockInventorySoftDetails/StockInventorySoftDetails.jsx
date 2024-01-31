import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import StockInventoryProduct from '../../Components/StockInventoryProduct/StockInventoryProduct'
import StockInventoryModules from '../../Components/StockInventoryModules/StockInventoryModules'
import StockInventoryVideoScreenshot from '../../Components/StockInventoryVideoScreenshot/StockInventoryVideoScreenshot'

const StockInventorySoftDetails = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <StockInventoryProduct/>
        <StockInventoryModules/>
        <StockInventoryVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default StockInventorySoftDetails