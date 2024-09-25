import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SupershopDetails from './Pages/SupershopDetails/SupershopDetails.jsx';
import ExploreReadyProducts from './Pages/ExploreReadyProducts/ExploreReadyProducts.jsx';
import CposDetails from './Pages/CposDetails/CposDetails.jsx';
import BsPosDetails from './Pages/BsPosDetails/BsPosDetails.jsx';
import AccountingSoftDetails from './Pages/AccountingSoftDetails/AccountingSoftDetails.jsx';
import BsMultibranchPosDetails from './Pages/BsMultibranchPosDetails/BsMultibranchPosDetails.jsx';
import PharmaPosDetails from './Pages/PharmaPosDetails/PharmaPosDetails.jsx';
import TilesanitaryPosDetails from './Pages/TilesanitaryPosDetails/TilesanitaryPosDetails.jsx';
import ElectroPosDetails from './Pages/ElectroPosDetails/ElectroPosDetails.jsx';
import DealerDistributionPosDetails from './Pages/DealerDistributionPosDetails/DealerDistributionPosDetails.jsx';
import RestaurantPosDetails from './Pages/RestaurantPosDetails/RestaurantPosDetails.jsx';
import LpgPosDetails from './Pages/LpgPosDetails/LpgPosDetails.jsx';
import AgroPoultryPosDetails from './Pages/AgroPoultryPosDetails/AgroPoultryPosDetails.jsx';
import TrainingCoachingSoftDetails from './Pages/TrainingCoachingSoftDetails/TrainingCoachingSoftDetails.jsx';
import EducationInstituteSoftDetails from './Pages/EducationInstituteSoftDetails/EducationInstituteSoftDetails.jsx';
import FactorySoftDetails from './Pages/FactorySoftDetails/FactorySoftDetails.jsx';
import BrickFieldSoftDetails from './Pages/BrickFieldSoftDetails/BrickFieldSoftDetails.jsx';
import OfficeManagementSoftDetails from './Pages/OfficeManagementSoftDetails/OfficeManagementSoftDetails.jsx';
import HospitalSoftDetails from './Pages/HospitalSoftDetails/HospitalSoftDetails.jsx';
import DiagnosticSoftDetails from './Pages/DiagnosticSoftDetails/DiagnosticSoftDetails.jsx';
import StockInventorySoftDetails from './Pages/StockInventorySoftDetails/StockInventorySoftDetails.jsx';
import IspBillingSoftDetails from './Pages/IspBillingSoftDetails/IspBillingSoftDetails.jsx';
import WebDevelopmentDetails from './Pages/WebDevelopmentDetails/WebDevelopmentDetails.jsx';
import WebDesignDevelopmentDetails from './Pages/WebDesignDevelopmentDetails/WebDesignDevelopmentDetails.jsx';
import WebAppDevelopmentDetails from './Pages/WebAppDevelopmentDetails/WebAppDevelopmentDetails.jsx';
import MobileAppDevelopmentDetails from './Pages/MobileAppDevelopmentDetails/MobileAppDevelopmentDetails.jsx';
import AboutCreativeIt from './Pages/AboutCreativeIt/AboutCreativeIt.jsx';
import ContactDetails from './Pages/ContactDetails/ContactDetails.jsx';
import WebsitePackageDetails from './Pages/WebsitePackageDetails/WebsitePackageDetails.jsx';
import BulkSmsDetails from './Pages/BulkSmsDetails/BulkSmsDetails.jsx';
import DomainRegistrationDetails from './Pages/DomainRegistrationDetails/DomainRegistrationDetails.jsx';
import PremiumHostingDetails from './Pages/PremiumHostingDetails/PremiumHostingDetails.jsx';
import Home from './Components/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/aboutcreativeit",
    element: <AboutCreativeIt/>,
  },
  {
    path: "/websitepackagedetails",
    element: <WebsitePackageDetails/>,
  },
  {
    path: "/contactdetails",
    element: <ContactDetails/>,
  },
  {
    path: "/explorereadyproducts",
    element: <ExploreReadyProducts/>,
  },
  {
    path: "/supershopdetails",
    element: <SupershopDetails/>,
  },
  {
    path: "/cposdetails",
    element: <CposDetails/>,
  },
  {
    path: "/bsposdetails",
    element: <BsPosDetails/>,
  },
  {
    path: "/bsmultibranchposdetails",
    element: <BsMultibranchPosDetails/>,
  },
  {
    path: "/pharmaposdetails",
    element: <PharmaPosDetails/>,
  },
  {
    path: "/tilesanitaryposdetails",
    element: <TilesanitaryPosDetails/>,
  },
  {
    path: "/electroposdetails",
    element: <ElectroPosDetails/>,
  },
  {
    path: "/dealerdistributionposdetails",
    element: <DealerDistributionPosDetails/>,
  },
  {
    path: "/restaurantposdetails",
    element: <RestaurantPosDetails/>,
  },
  {
    path: "/lpgposdetails",
    element: <LpgPosDetails/>,
  },
  {
    path: "/agropoultryposdetails",
    element: <AgroPoultryPosDetails/>,
  },
  {
    path: "/trainingcoachingsoftdetails",
    element: <TrainingCoachingSoftDetails/>,
  },
  {
    path: "/educationinstitutesoftdetails",
    element: <EducationInstituteSoftDetails/>,
  },
  {
    path: "/factorysoftdetails",
    element: <FactorySoftDetails/>,
  },
  {
    path: "/brickfieldsoftdetails",
    element: <BrickFieldSoftDetails/>,
  },
  {
    path: "/accountingsoftdetails",
    element: <AccountingSoftDetails/>,
  },
  {
    path: "/officemanagementsoftdetails",
    element: <OfficeManagementSoftDetails/>,
  },
  {
    path: "/hospitalsoftdetails",
    element: <HospitalSoftDetails/>,
  },
  {
    path: "/diagnosticsoftdetails",
    element: <DiagnosticSoftDetails/>,
  },
  {
    path: "/stockinventoryioftdetails",
    element: <StockInventorySoftDetails/>,
  },
  {
    path: "/ispbillingsoftdetails",
    element: <IspBillingSoftDetails/>,
  },
  {
    path: "/webdevelopmentdetails",
    element: <WebDevelopmentDetails/>,
  },
  {
    path: "/webdesigndevelopmentdetails",
    element: <WebDesignDevelopmentDetails/>,
  },
  {
    path: "/webappdevelopmentdetails",
    element: <WebAppDevelopmentDetails/>,
  },
  {
    path: "/mobileappdevelopmentdetails",
    element: <MobileAppDevelopmentDetails/>,
  },
  {
    path: "/premiumhostingdetails",
    element: <PremiumHostingDetails/>,
  },
  {
    path: "/bulksmsdetails",
    element: <BulkSmsDetails/>,
  },
  {
    path: "/domainregistrationdetails",
    element: <DomainRegistrationDetails/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
