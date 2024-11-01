import React, { useEffect } from 'react'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import DiagnosticProduct from '../../Components/DiagnosticProduct/DiagnosticProduct'
import DiagnosticModules from '../../Components/DiagnosticModules/DiagnosticModules'
import DiagnosticVideoScreenshot from '../../Components/DiagnosticVideoScreenshot/DiagnosticVideoScreenshot'

const DiagnosticSoftDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <DiagnosticProduct/>
        <DiagnosticModules/>
        <DiagnosticVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
    </div>
  )
}

export default DiagnosticSoftDetails