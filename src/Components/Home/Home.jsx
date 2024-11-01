import React, { useEffect } from 'react'
import Banner from '../Banner/Banner'
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import ProductsList from '../ProductsList/ProductsList'
import TechnologyLogo from '../TechnologyLogo/TechnologyLogo'
import WeCreativeIt from '../WeCreativeIt/WeCreativeIt'
import HappyClients from '../HappyClients/HappyClients'
import PriceQuote from '../PriceQuote/PriceQuote'
import ClientsLogo from '../ClientsLogo/ClientsLogo'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Banner />
            <WhatWeDo />
            <ProductsList />
            <TechnologyLogo />
            <WeCreativeIt />
            <HappyClients />
            <PriceQuote />
            <ClientsLogo />
        </div>
    )
}

export default Home