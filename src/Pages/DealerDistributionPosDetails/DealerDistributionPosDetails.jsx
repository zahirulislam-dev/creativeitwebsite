import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import DealershipDistributionProduct from '../../Components/DealershipDistributionProduct/DealershipDistributionProduct'
import DealershipDistributionVideoScreenshot from '../../Components/DealershipDistributionVideoScreenshot/DealershipDistributionVideoScreenshot'
import DealershipDistributionModules from '../../Components/DealershipDistributionModules/DealershipDistributionModules'

const DealerDistributionPosDetails = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <DealershipDistributionProduct></DealershipDistributionProduct>
        <DealershipDistributionModules/>
        <DealershipDistributionVideoScreenshot></DealershipDistributionVideoScreenshot>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default DealerDistributionPosDetails