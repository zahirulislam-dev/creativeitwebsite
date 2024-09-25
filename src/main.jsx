import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
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

// Define routes as separate and not nested under the home route
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/aboutcreativeit" element={<AboutCreativeIt />} />
      <Route path="/websitepackagedetails" element={<WebsitePackageDetails />} />
      <Route path="/contactdetails" element={<ContactDetails />} />
      <Route path="/explorereadyproducts" element={<ExploreReadyProducts />} />
      <Route path="/supershopdetails" element={<SupershopDetails />} />
      <Route path="/cposdetails" element={<CposDetails />} />
      <Route path="/bsposdetails" element={<BsPosDetails />} />
      <Route path="/bsmultibranchposdetails" element={<BsMultibranchPosDetails />} />
      <Route path="/pharmaposdetails" element={<PharmaPosDetails />} />
      <Route path="/tilesanitaryposdetails" element={<TilesanitaryPosDetails />} />
      <Route path="/electroposdetails" element={<ElectroPosDetails />} />
      <Route path="/dealerdistributionposdetails" element={<DealerDistributionPosDetails />} />
      <Route path="/restaurantposdetails" element={<RestaurantPosDetails />} />
      <Route path="/lpgposdetails" element={<LpgPosDetails />} />
      <Route path="/agropoultryposdetails" element={<AgroPoultryPosDetails />} />
      <Route path="/trainingcoachingsoftdetails" element={<TrainingCoachingSoftDetails />} />
      <Route path="/educationinstitutesoftdetails" element={<EducationInstituteSoftDetails />} />
      <Route path="/factorysoftdetails" element={<FactorySoftDetails />} />
      <Route path="/brickfieldsoftdetails" element={<BrickFieldSoftDetails />} />
      <Route path="/accountingsoftdetails" element={<AccountingSoftDetails />} />
      <Route path="/officemanagementsoftdetails" element={<OfficeManagementSoftDetails />} />
      <Route path="/hospitalsoftdetails" element={<HospitalSoftDetails />} />
      <Route path="/diagnosticsoftdetails" element={<DiagnosticSoftDetails />} />
      <Route path="/stockinventorysoftdetails" element={<StockInventorySoftDetails />} />
      <Route path="/ispbillingsoftdetails" element={<IspBillingSoftDetails />} />
      <Route path="/webdevelopmentdetails" element={<WebDevelopmentDetails />} />
      <Route path="/webdesigndevelopmentdetails" element={<WebDesignDevelopmentDetails />} />
      <Route path="/webappdevelopmentdetails" element={<WebAppDevelopmentDetails />} />
      <Route path="/mobileappdevelopmentdetails" element={<MobileAppDevelopmentDetails />} />
      <Route path="/premiumhostingdetails" element={<PremiumHostingDetails />} />
      <Route path="/bulksmsdetails" element={<BulkSmsDetails />} />
      <Route path="/domainregistrationdetails" element={<DomainRegistrationDetails />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

