import React, { useEffect } from 'react'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import FactoryProduct from '../../Components/FactoryProduct/FactoryProduct'
import FactoryModules from '../../Components/FactoryModules/FactoryModules'
import FactoryVideoScreenshot from '../../Components/FactoryVideoScreenshot/FactoryVideoScreenshot'

const FactorySoftDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <FactoryProduct/>
        <FactoryModules/>
        <FactoryVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
    </div>
  )
}

export default FactorySoftDetails