import React, { useEffect } from 'react'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import StockInventoryProduct from '../../Components/StockInventoryProduct/StockInventoryProduct'
import StockInventoryModules from '../../Components/StockInventoryModules/StockInventoryModules'
import StockInventoryVideoScreenshot from '../../Components/StockInventoryVideoScreenshot/StockInventoryVideoScreenshot'

const StockInventorySoftDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <StockInventoryProduct/>
        <StockInventoryModules/>
        <StockInventoryVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
    </div>
  )
}

export default StockInventorySoftDetails