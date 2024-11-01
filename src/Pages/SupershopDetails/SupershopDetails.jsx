import React, { useEffect } from 'react'
import SupershopProduct from '../../Components/SupershopProduct/SupershopProduct'
import SupershopModules from '../../Components/SupershopModules/SupershopModules'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import SupershopVideoScreenshot from '../../Components/SupershopVideoScreenshot/SupershopVideoScreenshot'

const SupershopDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <SupershopProduct></SupershopProduct>
      <SupershopModules></SupershopModules>
      <SupershopVideoScreenshot />
      <TramsCondition></TramsCondition>
      <Faq></Faq>
    </div>
  )
}

export default SupershopDetails