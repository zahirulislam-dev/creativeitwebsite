import Banner from "./Components/Banner/Banner"
import ClientsLogo from "./Components/ClientsLogo/ClientsLogo"
import Footer from "./Components/Footer/Footer"
import Footernav from "./Components/Footernav/Footernav"
import HappyClients from "./Components/HappyClients/HappyClients"
import Header from "./Components/Header/Header"
import Navbar from "./Components/Navbar/Navbar"
import PriceQuote from "./Components/PriceQuote/PriceQuote"
import ProductsList from "./Components/ProductsList/ProductsList"
import TechnologyLogo from "./Components/TechnologyLogo/TechnologyLogo"
import WeCreativeIt from "./Components/WeCreativeIt/WeCreativeIt"
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo"


function App() {

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>
      <WhatWeDo></WhatWeDo>
      <ProductsList></ProductsList>
      <TechnologyLogo />
      <WeCreativeIt></WeCreativeIt>
      <HappyClients></HappyClients>
      <PriceQuote></PriceQuote>
      <ClientsLogo></ClientsLogo>
      <Footer></Footer>
      <Footernav></Footernav>
    </div>
  )
}

export default App
