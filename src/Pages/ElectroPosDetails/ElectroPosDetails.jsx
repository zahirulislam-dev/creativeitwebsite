import React, { useEffect } from 'react'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import ElectronicsProduct from '../../Components/ElectronicsProduct/ElectronicsProduct'
import ElectronicsModules from '../../Components/ElectronicsModules/ElectronicsModules'
import ElectronicsVideoScreenshot from '../../Components/ElectronicsVideoScreenshot/ElectronicsVideoScreenshot'

const ElectroPosDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <ElectronicsProduct></ElectronicsProduct>
        <ElectronicsModules></ElectronicsModules>
        <ElectronicsVideoScreenshot></ElectronicsVideoScreenshot>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
    </div>
  )
}

export default ElectroPosDetails