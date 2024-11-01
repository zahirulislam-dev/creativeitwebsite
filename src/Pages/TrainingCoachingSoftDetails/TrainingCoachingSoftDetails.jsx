import React, { useEffect } from 'react'
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
        <TrainingCenterProduct/>
        <TrainingCenterModules/>
        <TrainingCenterVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
    </div>
  )
}

export default TrainingCoachingSoftDetails