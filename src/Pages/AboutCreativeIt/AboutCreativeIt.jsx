import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import About from '../../Components/About/About'
import Counter from '../../Components/Counter/Counter'
import OurTeamMembers from '../../Components/OurTeamMembers/OurTeamMembers'

const AboutCreativeIt = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <About/>
        <Counter/>
        <OurTeamMembers/>
        <Footer/>
        <Footernav/>
    </div>
  )
}

export default AboutCreativeIt