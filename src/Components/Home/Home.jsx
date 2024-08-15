import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import ProductsList from '../ProductsList/ProductsList'
import TechnologyLogo from '../TechnologyLogo/TechnologyLogo'
import WeCreativeIt from '../WeCreativeIt/WeCreativeIt'
import HappyClients from '../HappyClients/HappyClients'
import PriceQuote from '../PriceQuote/PriceQuote'
import ClientsLogo from '../ClientsLogo/ClientsLogo'
import Footer from '../Footer/Footer'
import Footernav from '../Footernav/Footernav'

const Home = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Banner/>
            <WhatWeDo/>
            <ProductsList/>
            <TechnologyLogo/>
            <WeCreativeIt/>
            <HappyClients/>
            <PriceQuote/>
            <ClientsLogo/>
            <Footer/>
            <Footernav/>
        </div>
    )
}

export default Home