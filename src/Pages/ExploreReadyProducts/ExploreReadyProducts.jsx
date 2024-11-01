import React, { useEffect } from 'react'
import ReadyProductsList from '../../Components/ReadyProductsList/ReadyProductsList'


const ExploreReadyProducts = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
        <ReadyProductsList/>
    </div>
  )
}

export default ExploreReadyProducts