import React, { useEffect } from 'react'
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
        <AccountingProduct/>
        <AccountingModules/>
        <AccountingVideoScreenshot/>
        <TramsCondition></TramsCondition>
        <Faq></Faq>
    </div>
  )
}

export default AccountingSoftDetails