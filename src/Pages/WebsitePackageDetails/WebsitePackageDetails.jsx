import React, { useEffect } from 'react'
import WebsitePackage from '../../Components/WebsitePackage/WebsitePackage'

const WebsitePackageDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <WebsitePackage/>
    </div>
  )
}

export default WebsitePackageDetails