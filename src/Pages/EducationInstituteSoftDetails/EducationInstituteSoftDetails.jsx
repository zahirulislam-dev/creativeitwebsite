import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
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
        <Header></Header>
        <Navbar></Navbar>
        <EducationInstituteProduct/>
        <EducationInstituteModules/>
        <EducationInstituteVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default EducationInstituteSoftDetails