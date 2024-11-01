import React, { useEffect } from 'react'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import HospitalProduct from '../../Components/HospitalProduct/HospitalProduct'
import HospitalModules from '../../Components/HospitalModules/HospitalModules'
import HospitalVideoScreenshot from '../../Components/HospitalVideoScreenshot/HospitalVideoScreenshot'

const HospitalSoftDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <HospitalProduct/>
        <HospitalModules/>
        <HospitalVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
    </div>
  )
}

export default HospitalSoftDetails