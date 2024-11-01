import React, { useEffect } from 'react'
import About from '../../Components/About/About'
import Counter from '../../Components/Counter/Counter'
import OurTeamMembers from '../../Components/OurTeamMembers/OurTeamMembers'

const AboutCreativeIt = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
        <About/>
        <Counter/>
        <OurTeamMembers/>
    </div>
  )
}

export default AboutCreativeIt