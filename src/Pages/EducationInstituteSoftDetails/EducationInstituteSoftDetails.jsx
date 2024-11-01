import React, { useEffect } from 'react'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import EducationInstituteProduct from '../../Components/EducationInstituteProduct/EducationInstituteProduct'
import EducationInstituteModules from '../../Components/EducationInstituteModules/EducationInstituteModules'
import EducationInstituteVideoScreenshot from '../../Components/EducationInstituteVideoScreenshot/EducationInstituteVideoScreenshot'

const EducationInstituteSoftDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <EducationInstituteProduct/>
        <EducationInstituteModules/>
        <EducationInstituteVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
    </div>
  )
}

export default EducationInstituteSoftDetails