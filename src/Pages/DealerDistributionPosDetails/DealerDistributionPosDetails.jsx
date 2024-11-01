import React, { useEffect } from 'react'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import DealershipDistributionProduct from '../../Components/DealershipDistributionProduct/DealershipDistributionProduct'
import DealershipDistributionVideoScreenshot from '../../Components/DealershipDistributionVideoScreenshot/DealershipDistributionVideoScreenshot'
import DealershipDistributionModules from '../../Components/DealershipDistributionModules/DealershipDistributionModules'

const DealerDistributionPosDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <DealershipDistributionProduct/>
        <DealershipDistributionModules/>
        <DealershipDistributionVideoScreenshot/>
        <TramsCondition/>
        <Faq/>
    </div>
  )
}

export default DealerDistributionPosDetails