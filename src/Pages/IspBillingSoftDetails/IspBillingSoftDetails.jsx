import React, { useEffect } from 'react'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import IspProduct from '../../Components/IspProduct/IspProduct'
import IspModules from '../../Components/IspModules/IspModules'
import IspVideoScreenshot from '../../Components/IspVideoScreenshot/IspVideoScreenshot'

const IspBillingSoftDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <IspProduct></IspProduct>
        <IspModules></IspModules>
        <IspVideoScreenshot></IspVideoScreenshot>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
    </div>
  )
}

export default IspBillingSoftDetails