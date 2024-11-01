import React, { useEffect } from 'react'
import Contact from '../../Components/Contact/Contact'

const ContactDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <Contact/>
    </div>
  )
}

export default ContactDetails