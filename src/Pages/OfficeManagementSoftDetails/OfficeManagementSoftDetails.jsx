import React, { useEffect } from 'react'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import OfficeProduct from '../../Components/OfficeProduct/OfficeProduct'
import OfficeModules from '../../Components/OfficeModules/OfficeModules'
import OfficeVideoScreenshot from '../../Components/OfficeVideoScreenshot/OfficeVideoScreenshot'

const OfficeManagementSoftDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <OfficeProduct/>
        <OfficeModules/>
        <OfficeVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
    </div>
  )
}

export default OfficeManagementSoftDetails