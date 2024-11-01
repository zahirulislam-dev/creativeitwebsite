import React, { useEffect } from 'react'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import AgroPoultryProduct from '../../Components/AgroPoultryProduct/AgroPoultryProduct'
import AgroPoultryModules from '../../Components/AgroPoultryModules/AgroPoultryModules'
import AgroPoultryVideoScreenshot from '../../Components/AgroPoultryVideoScreenshot/AgroPoultryVideoScreenshot'

const AgroPoultryPosDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <AgroPoultryProduct/>
        <AgroPoultryModules/>
        <AgroPoultryVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
    </div>
  )
}

export default AgroPoultryPosDetails