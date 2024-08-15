import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import TrainingCenterProduct from '../../Components/TrainingCenterProduct/TrainingCenterProduct'
import TrainingCenterModules from '../../Components/TrainingCenterModules/TrainingCenterModules'
import TrainingCenterVideoScreenshot from '../../Components/TrainingCenterVideoScreenshot/TrainingCenterVideoScreenshot'

const TrainingCoachingSoftDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <TrainingCenterProduct/>
        <TrainingCenterModules/>
        <TrainingCenterVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default TrainingCoachingSoftDetails