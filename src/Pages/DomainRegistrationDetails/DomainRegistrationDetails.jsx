import React, { useEffect } from 'react'
import DomainRegistration from '../../Components/DomainRegistration/DomainRegistration'

const DomainRegistrationDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  return (
    <div>
      <DomainRegistration/>
    </div>
  )
}

export default DomainRegistrationDetails