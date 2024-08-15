import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Footernav from '../../Components/Footernav/Footernav'
import TramsCondition from '../../Components/TramsCondition/TramsCondition'
import Faq from '../../Components/Faq/Faq'
import AccountingProduct from '../../Components/AccountingProduct/AccountingProduct'
import AccountingModules from '../../Components/AccountingModules/AccountingModules'
import AccountingVideoScreenshot from '../../Components/AccountingVideoScreenshot/AccountingVideoScreenshot'

const AccountingSoftDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <AccountingProduct/>
        <AccountingModules/>
        <AccountingVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
  )
}

export default AccountingSoftDetails