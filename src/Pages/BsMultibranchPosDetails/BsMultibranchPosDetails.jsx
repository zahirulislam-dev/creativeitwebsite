import React, { useEffect } from 'react'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import BsMultiBranchPosProduct from '../../Components/BsMultiBranchPosProduct/BsMultiBranchPosProduct'
import BsMultiBranchPosVideoScreenshot from '../../Components/BsMultiBranchPosVideoScreenshot/BsMultiBranchPosVideoScreenshot'
import BsMultiBranchPosModules from '../../Components/BsMultiBranchPosModules/BsMultiBranchPosModules'

const BsMultibranchPosDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <BsMultiBranchPosProduct></BsMultiBranchPosProduct>
      <BsMultiBranchPosModules />
      <BsMultiBranchPosVideoScreenshot></BsMultiBranchPosVideoScreenshot>
      <TramsCondition></TramsCondition>
      <Faq></Faq>
    </div>
  )
}

export default BsMultibranchPosDetails