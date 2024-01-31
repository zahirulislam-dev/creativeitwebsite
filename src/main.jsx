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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/AboutCreativeIt",
    element: <AboutCreativeIt/>,
  },
  {
    path: "/WebsitePackageDetails",
    element: <WebsitePackageDetails/>,
  },
  {
    path: "/ContactDetails",
    element: <ContactDetails/>,
  },
  {
    path: "/ExploreReadyProducts",
    element: <ExploreReadyProducts/>,
  },
  {
    path: "/SupershopDetails",
    element: <SupershopDetails/>,
  },
  {
    path: "/CposDetails",
    element: <CposDetails/>,
  },
  {
    path: "/BsposDetails",
    element: <BsPosDetails/>,
  },
  {
    path: "/BsMultibranchPosDetails",
    element: <BsMultibranchPosDetails/>,
  },
  {
    path: "/PharmaPosDetails",
    element: <PharmaPosDetails/>,
  },
  {
    path: "/TilesanitaryPosDetails",
    element: <TilesanitaryPosDetails/>,
  },
  {
    path: "/ElectroPosDetails",
    element: <ElectroPosDetails/>,
  },
  {
    path: "/DealerDistributionPosDetails",
    element: <DealerDistributionPosDetails/>,
  },
  {
    path: "/RestaurantPosDetails",
    element: <RestaurantPosDetails/>,
  },
  {
    path: "/LpgPosDetails",
    element: <LpgPosDetails/>,
  },
  {
    path: "/AgroPoultryPosDetails",
    element: <AgroPoultryPosDetails/>,
  },
  {
    path: "/TrainingCoachingSoftDetails",
    element: <TrainingCoachingSoftDetails/>,
  },
  {
    path: "/EducationInstituteSoftDetails",
    element: <EducationInstituteSoftDetails/>,
  },
  {
    path: "/FactorySoftDetails",
    element: <FactorySoftDetails/>,
  },
  {
    path: "/BrickFieldSoftDetails",
    element: <BrickFieldSoftDetails/>,
  },
  {
    path: "/AccountingSoftDetails",
    element: <AccountingSoftDetails/>,
  },
  {
    path: "/OfficeManagementSoftDetails",
    element: <OfficeManagementSoftDetails/>,
  },
  {
    path: "/HospitalSoftDetails",
    element: <HospitalSoftDetails/>,
  },
  {
    path: "/DiagnosticSoftDetails",
    element: <DiagnosticSoftDetails/>,
  },
  {
    path: "/StockInventorySoftDetails",
    element: <StockInventorySoftDetails/>,
  },
  {
    path: "/IspBillingSoftDetails",
    element: <IspBillingSoftDetails/>,
  },
  {
    path: "/WebDevelopmentDetails",
    element: <WebDevelopmentDetails/>,
  },
  {
    path: "/WebDesignDevelopmentDetails",
    element: <WebDesignDevelopmentDetails/>,
  },
  {
    path: "/WebAppDevelopmentDetails",
    element: <WebAppDevelopmentDetails/>,
  },
  {
    path: "/MobileAppDevelopmentDetails",
    element: <MobileAppDevelopmentDetails/>,
  },
  {
    path: "/PremiumHostingDetails",
    element: <PremiumHostingDetails/>,
  },
  {
    path: "/BulkSmsDetails",
    element: <BulkSmsDetails/>,
  },
  {
    path: "/DomainRegistrationDetails",
    element: <DomainRegistrationDetails/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
