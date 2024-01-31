import React from 'react'

import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import TilesSanitaryProduct from '../../Components/TilesSanitaryProduct/TilesSanitaryProduct'
import TilesSanitaryModules from '../../Components/TilesSanitaryModules/TilesSanitaryModules'
import TilesSanitaryVideoScreenshot from '../../Components/TilesSanitaryVideoScreenshot/TilesSanitaryVideoScreenshot'

const TilesanitaryPosDetails = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <TilesSanitaryProduct/>
        <TilesSanitaryModules></TilesSanitaryModules>
        <TilesSanitaryVideoScreenshot></TilesSanitaryVideoScreenshot>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default TilesanitaryPosDetails