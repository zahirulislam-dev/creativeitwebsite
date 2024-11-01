import React, { useEffect } from 'react'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import BsposProduct from '../../Components/BsPosProduct/BsPosProduct'
import BsPosModules from '../../Components/BsPosModules/BsPosModules'
import BsPosVideoScreenshot from '../../Components/BsPosVideoScreenshot/BsPosVideoScreenshot'

const BsPosDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <BsposProduct></BsposProduct>
        <BsPosModules></BsPosModules>
        <BsPosVideoScreenshot></BsPosVideoScreenshot>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
    </div>
  )
}

export default BsPosDetails