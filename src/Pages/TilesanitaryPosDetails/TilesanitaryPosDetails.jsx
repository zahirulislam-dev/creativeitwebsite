import React, { useEffect } from 'react'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import TilesSanitaryProduct from '../../Components/TilesSanitaryProduct/TilesSanitaryProduct'
import TilesSanitaryModules from '../../Components/TilesSanitaryModules/TilesSanitaryModules'
import TilesSanitaryVideoScreenshot from '../../Components/TilesSanitaryVideoScreenshot/TilesSanitaryVideoScreenshot'

const TilesanitaryPosDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <TilesSanitaryProduct/>
        <TilesSanitaryModules></TilesSanitaryModules>
        <TilesSanitaryVideoScreenshot></TilesSanitaryVideoScreenshot>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
    </div>
  )
}

export default TilesanitaryPosDetails