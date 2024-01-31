import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import BsMultiBranchPosProduct from '../../Components/BsMultiBranchPosProduct/BsMultiBranchPosProduct'
import BsMultiBranchPosVideoScreenshot from '../../Components/BsMultiBranchPosVideoScreenshot/BsMultiBranchPosVideoScreenshot'
import BsMultiBranchPosModules from '../../Components/BsMultiBranchPosModules/BsMultiBranchPosModules'

const BsMultibranchPosDetails = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <BsMultiBranchPosProduct></BsMultiBranchPosProduct>
        <BsMultiBranchPosModules/>
        <BsMultiBranchPosVideoScreenshot></BsMultiBranchPosVideoScreenshot>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default BsMultibranchPosDetails