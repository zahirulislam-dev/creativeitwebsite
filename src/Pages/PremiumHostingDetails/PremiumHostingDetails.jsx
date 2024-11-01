import React, { useEffect } from 'react'
import PremiumHosting from '../../Components/PremiumHosting/PremiumHosting'
import WebHostingPackage from '../../Components/WebHostingPackage/WebHostingPackage'

const PremiumHostingDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
      <PremiumHosting/>
      <WebHostingPackage/>
    </div>
  )
}

export default PremiumHostingDetails