import React, { useEffect } from 'react'
import BulkSms from '../../Components/BulkSms/BulkSms'

const BulkSmsDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <BulkSms/>
    </div>
  )
}

export default BulkSmsDetails