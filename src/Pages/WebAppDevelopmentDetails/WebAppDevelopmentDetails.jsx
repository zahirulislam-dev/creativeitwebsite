import React, { useEffect } from 'react'
import WebAppDevelopment from '../../Components/WebAppDevelopment/WebAppDevelopment'

const WebAppDevelopmentDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <WebAppDevelopment/>
    </div>
  )
}

export default WebAppDevelopmentDetails