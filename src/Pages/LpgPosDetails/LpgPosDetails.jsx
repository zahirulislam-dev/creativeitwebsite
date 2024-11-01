import React, { useEffect } from 'react'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import LpgProduct from '../../Components/LpgProduct/LpgProduct'
import LpgModules from '../../Components/LpgModules/LpgModules'
import LpgVideoScreenshot from '../../Components/LpgVideoScreenshot/LpgVideoScreenshot'

const LpgPosDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <LpgProduct></LpgProduct>
        <LpgModules></LpgModules>
        <LpgVideoScreenshot></LpgVideoScreenshot>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
    </div>
  )
}

export default LpgPosDetails