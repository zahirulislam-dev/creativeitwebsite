import React, { useEffect } from 'react'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import RestaurantProduct from '../../Components/RestaurantProduct/RestaurantProduct'
import RestaurantModules from '../../Components/RestaurantModules/RestaurantModules'
import RestaurantVideoScreenshot from '../../Components/RestaurantVideoScreenshot/RestaurantVideoScreenshot'

const RestaurantPosDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <RestaurantProduct/>
        <RestaurantModules/>
        <RestaurantVideoScreenshot/>
        <TramsCondition/>
        <Faq/>
    </div>
  )
}

export default RestaurantPosDetails