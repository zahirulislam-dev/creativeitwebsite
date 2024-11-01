import React, { useEffect } from 'react'
import SoftwareDevelopment from '../../Components/SoftwareDevelopment/SoftwareDevelopment'

const SoftwareDevelopmentDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <SoftwareDevelopment/>
    </div>
  )
}

export default SoftwareDevelopmentDetails