import React from 'react'
import Prod1 from "../../assets/images/Prod1.png"
import Prod2 from "../../assets/images/Prod2.png"
import Prod3 from "../../assets/images/Prod3.png"
import Prod4 from "../../assets/images/Prod4.png"

const Slider = () => {
  return (
    <div className='gap-[10px] flex justify-between flex-wrap py-[50px] px-6 md:px-0'>
        <img src={Prod1} alt="" />
        <img src={Prod2} alt="" />
        <img src={Prod3} alt="" />
        <img src={Prod4} alt="" />
    </div>
  )
}

export default Slider