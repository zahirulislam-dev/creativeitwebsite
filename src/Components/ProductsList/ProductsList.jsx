import React from 'react'
import { GoArrowRight } from "react-icons/go";
import SuperShop from '../../assets/images/SuperShop.png'
import grocery from '../../assets/images/grocery.jpeg'
import FashionStore from '../../assets/images/FashionStore.png'
import MultiPos from '../../assets/images/MultiPos.jpg'
import PharmacyIcon from '../../assets/images/PharmacyIcon.png'
import TilesShop from '../../assets/images/TilesShop.jpg'
import Electro from '../../assets/images/Electro.avif'
import DealershipR from '../../assets/images/DealershipR.png'
import Resturent from '../../assets/images/Resturent.png'
import LPG from '../../assets/images/LPG.png'
import Poultry from '../../assets/images/Poultry.jpg'
import Training from '../../assets/images/Training.avif'
import Education from '../../assets/images/Education.png'
import Factory from '../../assets/images/Factory.png'
import BrickField from '../../assets/images/BrickField.jpg'
import Accounting from '../../assets/images/Accounting.png'
import Office from '../../assets/images/Office.png'
import Diagonstick from '../../assets/images/Diagonstick.png'
import HospitalIcon from '../../assets/images/HospitalIcon.jpg'
import Stock from '../../assets/images/Stock.png'
import Isp from '../../assets/images/Isp.png'
import { Link } from 'react-router-dom';

const ProductsList = () => {
  return (
    <div className='bg-sky-50 py-[50px] xl:py-[70px]'>
      <div className='max-w-container mx-auto px-[10px] xl:px-0'>
        <h3 className='font-pops font-bold text-[35px] xl:text-[64px] text-[#1C1E53] xl:text-center md:mb-0'>Ready Products List</h3>
        <p className='font-pops font-medium text-[16px] md:text-[20px] xl:text-[25px] text-[#000020] xl:text-center md:mb-0 mt-[20px] xl:w-[928px] xl:ml-[312px]'>We have develped some software as ready product for you. The software is ready to use just order and enjoy with in a day!</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mt-[50px]'>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={SuperShop} alt="" className='w-[100px] h-[100px] mx-auto rounded-full mb-[10px] bg-transparent' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>SuperShop Management Online POS Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2022-08-02</p>
            </div>
            <Link to='/SupershopDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={grocery} alt="" className='w-[100px] h-[100px] mx-auto rounded-full mb-[10px] bg-transparent' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>cPOS Shop/ Showroom Accounting Management Online POS Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2022-08-02</p>
            </div>
            <Link to='/CposDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={FashionStore} alt="" className='w-[100px] h-[100px] rounded-full mx-auto mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Fashion House, Footwear Store, Brand Shop Management Online POS Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2022-03-01</p>
            </div>
            <Link to='/BsPosDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={MultiPos} alt="" className='w-[100px] h-[100px] rounded-full mx-auto mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Fashion House, Footwear Store, Brand Shop Multiple Branch Management erp Online Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2023-03-01</p>
            </div>
            <Link to='/BsMultibranchPosDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={PharmacyIcon} alt="" className='w-[100px] h-[100px] rounded-full mx-auto mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Pharmacy Shop Management Online POS Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2022-04-17</p>
            </div>
            <Link to='/PharmaPosDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={TilesShop} alt="" className='w-[100px] h-[100px] rounded-full mx-auto mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Tiles & Sanitary Shop Management Online POS Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2022-04-17</p>
            </div>
            <Link to='/TilesanitaryPosDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={Electro} alt="" className='w-[100px] h-[100px] rounded-full mx-auto mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Electronics & Electric Shop Management Online POS Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2022-08-02</p>
            </div>
            <Link to='/ElectroPosDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={DealershipR} alt="" className='w-[100px] h-[100px] rounded-full mx-auto mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Dealership & Distribution Management Online POS Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2023-01-28</p>
            </div>
            <Link to='/DealerDistributionPosDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={Resturent} alt="" className='w-[100px] h-[100px] rounded-full mx-auto mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Restaurant Billing Management Online POS Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2022-04-17</p>
            </div>
            <Link to='/RestaurantPosDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={LPG} alt="" className='w-[100px] h-[100px] rounded-full mx-auto mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>LPG Business Dealership, Distribution Accounting Management Online Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2023-10-05</p>
            </div>
            <Link to='/LpgPosDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={Poultry} alt="" className='w-[100px] h-[100px] rounded-full mx-auto mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Agro & Poultry Farm Business Accounting Management Online Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2023-10-01</p>
            </div>
            <Link to='/AgroPoultryPosDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={Training} alt="" className='w-[100px] h-[100px] rounded-full mx-auto mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Training & Coaching Center Management Online Software With Website</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2022-04-01</p>
            </div>
            <Link to='/TrainingCoachingSoftDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={Education} alt="" className='w-[100px] h-[100px] mx-auto mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Education Institute Management Online Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2022-05-21</p>
            </div>
            <Link to='/EducationInstituteSoftDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={Factory} alt="" className='w-[100px] h-[100px] mx-auto mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Factory, Production Accounting Management Erp Online Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2022-05-21</p>
            </div>
            <Link to='/FactorySoftDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={BrickField} alt="" className='w-[100px] h-[100px] rounded-full mx-auto mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Brick Field Manufacturing Accounting Management Online Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2022-05-21</p>
            </div>
            <Link to='/BrickFieldSoftDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={Accounting} alt="" className='w-[100px] h-[100px] rounded-full mx-auto mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Accounting Management Online Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2022-05-21</p>
            </div>
            <Link to='/AccountingSoftDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={Office} alt="" className='w-[100px] h-[100px] rounded-full mx-auto mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Office Management System Online Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2021-12-01</p>
            </div>
            <Link to='/OfficeManagementSoftDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={HospitalIcon} alt="" className='w-[100px] h-[100px] mx-auto mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Hospital & Clinic Management Online Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2022-08-13</p>
            </div>
            <Link to='/HospitalSoftDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={Diagonstick} alt="" className='w-[100px] h-[100px] mx-auto mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Diagnostic Center Management Online Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2022-08-13</p>
            </div>
            <Link to='/DiagnosticSoftDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={Stock} alt="" className='w-[100px] h-[100px] mx-auto mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Stock Inventory Management Online Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2022-05-21</p>
            </div>
            <Link to='/StockInventorySoftDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <div className=''>
              <img src={Isp} alt="" className='w-[100px] h-[100px] mx-auto rounded-full mb-[10px]' />
              <h5 className='font-pops font-semibold text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Internet and Cable Operator Billing Management Online Software</h5>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[10px] leading-9'>Language: English & Bangla</p>
              <p className='font-pops font-medium text-[18px] text-overlay text-center mb-[15px] leading-9'>Update: 2022-05-21</p>
            </div>
            <Link to='/IspBillingSoftDetails'>
              <div className='flex items-center justify-center'>
                <button className='font-pops font-semibold text-[20px] text-[#4CAF4F]'>Order Now</button>
                <GoArrowRight className='text-[#4CAF4F]' />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsList