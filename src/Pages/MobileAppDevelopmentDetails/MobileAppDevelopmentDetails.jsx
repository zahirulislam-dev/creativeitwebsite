import React, { useEffect } from 'react'
import MobileAppDevelopment from '../../Components/MobileAppDevelopment/MobileAppDevelopment'

const MobileAppDevelopmentDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <MobileAppDevelopment/>
    </div>
  )
}

export default MobileAppDevelopmentDetails