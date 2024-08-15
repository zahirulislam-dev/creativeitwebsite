import React, { useEffect } from 'react'
import ReadyProductsList from '../../Components/ReadyProductsList/ReadyProductsList'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'

const ExploreReadyProducts = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <ReadyProductsList></ReadyProductsList>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default ExploreReadyProducts