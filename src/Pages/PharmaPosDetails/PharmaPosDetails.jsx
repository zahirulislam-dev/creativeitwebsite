import React, { useEffect } from 'react'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import PharmaPosProduct from '../../Components/PharmaPosProduct/PharmaPosProduct'
import PharmaPosVideoScreenshot from '../../Components/PharmaPosVideoScreenshot/PharmaPosVideoScreenshot'
import PharmaPosModules from '../../Components/PharmaPosModules/PharmaPosModules'

const PharmaPosDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <PharmaPosProduct></PharmaPosProduct>
        <PharmaPosModules/>
        <PharmaPosVideoScreenshot></PharmaPosVideoScreenshot>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
    </div>
  )
}

export default PharmaPosDetails