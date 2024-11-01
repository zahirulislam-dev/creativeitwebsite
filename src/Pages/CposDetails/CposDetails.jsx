import React, { useEffect } from 'react'
import CposProduct from '../../Components/CposProduct/CposProduct'
import CposModules from '../../Components/CposModules/CposModules'
import CposVideoScreenshot from '../../Components/CposVideoScreenshot/CposVideoScreenshot'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'

const CposDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <CposProduct></CposProduct>
      <CposModules></CposModules>
      <CposVideoScreenshot></CposVideoScreenshot>
      <TramsCondition></TramsCondition>
      <Faq></Faq>
    </div>
  )
}

export default CposDetails