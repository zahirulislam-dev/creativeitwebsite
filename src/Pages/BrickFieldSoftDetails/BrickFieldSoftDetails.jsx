import React, { useEffect } from 'react'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import BrickFieldProduct from '../../Components/BrickFieldProduct/BrickFieldProduct'
import BrickFieldModules from '../../Components/BrickFieldModules/BrickFieldModules'
import BrickFieldVideoScreenshot from '../../Components/BrickFieldVideoScreenshot/BrickFieldVideoScreenshot'

const BrickFieldSoftDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <BrickFieldProduct/>
        <BrickFieldModules/>
        <BrickFieldVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
    </div>
  )
}

export default BrickFieldSoftDetails