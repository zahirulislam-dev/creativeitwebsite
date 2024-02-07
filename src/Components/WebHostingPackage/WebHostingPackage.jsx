import React from 'react'
import softwareDev from '../../assets/images/softwareDev.jpg'
import WebDesignDev from '../../assets/images/WebDesignDev.jpg'
import WebApp from '../../assets/images/WebApp.jpg'
import MobileAppDev from '../../assets/images/MobileAppDev.jpg'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom'
import { TbCurrencyTaka } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const WebHostingPackage = () => {
  return (
    <div className='bg-[#F5F7FA] pt-[160px] sm:pt-[150px] pb-[30px] md:pt-[155px] lg:pt-[170px] xl:pt-[200px] md:pb-[50px]'>
      <div className='max-w-container mx-auto px-[10px] xl:px-0'>
        <p className='font-pops font-bold text-[30px] xl:text-[64px] text-[#1C1E53] text-center mb-[20px]'>PREMIUM WEB HOSTING PACKAGES</p>
        <p className='font-pops font-medium text-[18px] xl:text-[20px] text-overlay text-center mb-[20px] xl:mb-[50px]'>Choose your package from our package list</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]'>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <h3 className='font-pops font-semibold text-[25px] xl:text-[30px] text-[#1C1E53]'>Basic</h3>
              <p className='font-pops font-medium text-[18px] xl:text-[20px] text-[#5F35F5] mt-[8px]'>Premium</p>
            <div className='mt-[15px]'>
              <p className='font-pops font-medium text-[45px] xl:text-[60px] text-[#4CAF4F] '>2000<span className='text-[25px] xl:text-[30px]'>BDT</span></p>
              <p className='font-pops font-medium text-[16px] text-overlay mt-[10px]'>Per year service & Maintenance</p>
            </div>
            <div className='flex items-center mt-[8px]'>
              <TbCurrencyTaka className='mr-[1px] text-[20px] text-primary' />
              <p className='font-pops font-medium text-[16px] text-primary'>. 2000</p>
            </div>
            <div className='mt-[30px] leading-10'>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>500 MB Storage</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>10 GB Bandwidth</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>05 Mysql Database</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>10 Email Address</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>All Basic Hosting Features</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>24/7/365 Tech Support</p>
              </div>
            </div>
            <Link to='/ContactDetails'>
              <button className='font-pops font-semibold text-[18px] xl:text-[20px] text-white bg-[#4CAF4F] py-[15px] w-full rounded mt-[40px]'>Order Now</button>
            </Link>
          </div>
          <div className='bg-[#fff] px-[25px] py-[30px] shadow rounded mt-[20px] xl:mt-0'>
            <h3 className='font-pops font-semibold text-[25px] xl:text-[30px] text-[#1C1E53]'>Advance</h3>
              <p className='font-pops font-medium text-[18px] xl:text-[20px] text-[#5F35F5] mt-[8px]'>Premium</p>
            <div className='mt-[15px]'>
              <p className='font-pops font-medium text-[45px] xl:text-[60px] text-[#4CAF4F] '>3000<span className='text-[25px] xl:text-[30px]'>BDT</span></p>
              <p className='font-pops font-medium text-[16px] text-overlay mt-[10px]'>Per year service & Maintenance</p>
            </div>
            <div className='flex items-center mt-[8px]'>
              <TbCurrencyTaka className='mr-[1px] text-[20px] text-primary' />
              <p className='font-pops font-medium text-[16px] text-primary'>. 3000</p>
            </div>
            <div className='mt-[30px] leading-10'>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>1 GB Storage</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>20 GB Bandwidth</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>10 Mysql Database</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>10 Email Address</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>All Basic Hosting Features</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>24/7/365 Tech Support</p>
              </div>
            </div>
            <Link to='/ContactDetails'>
              <button className='font-pops font-semibold text-[18px] xl:text-[20px] text-white bg-[#4CAF4F] py-[15px] w-full rounded mt-[40px]'>Order Now</button>
            </Link>
          </div>
          <div className='bg-[#fff] px-[25px] py-[30px] shadow rounded mt-[20px] xl:mt-0'>
            <h3 className='font-pops font-semibold text-[25px] xl:text-[30px] text-[#1C1E53]'>Professional</h3>
              <p className='font-pops font-medium text-[18px] xl:text-[20px] text-[#5F35F5] mt-[8px]'>Premium</p>
            <div className='mt-[15px]'>
              <p className='font-pops font-medium text-[45px] xl:text-[60px] text-[#4CAF4F] '>5000<span className='text-[25px] xl:text-[30px]'>BDT</span></p>
              <p className='font-pops font-medium text-[16px] text-overlay mt-[10px]'>Per year service & Maintenance</p>
            </div>
            <div className='flex items-center mt-[8px]'>
              <TbCurrencyTaka className='mr-[1px] text-[20px] text-primary' />
              <p className='font-pops font-medium text-[16px] text-primary'>. 5000</p>
            </div>
            <div className='mt-[30px] leading-10'>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>2 GB Storage</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>40 GB Bandwidth</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>20 Mysql Database</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>20 Email Address</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>All Basic Hosting Features</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>24/7/365 Tech Support</p>
              </div>
            </div>
            <Link to='/ContactDetails'>
              <button className='font-pops font-semibold text-[18px] xl:text-[20px] text-white bg-[#4CAF4F] py-[15px] w-full rounded mt-[40px]'>Order Now</button>
            </Link>
          </div>
          <div className='bg-[#fff] px-[25px] py-[30px] shadow rounded mt-[20px] xl:mt-0'>
            <h3 className='font-pops font-semibold text-[25px] xl:text-[30px] text-[#1C1E53]'>Professional Plus</h3>
              <p className='font-pops font-medium text-[18px] xl:text-[20px] text-[#5F35F5] mt-[8px]'>Premium</p>
            <div className='mt-[15px]'>
              <p className='font-pops font-medium text-[45px] xl:text-[60px] text-[#4CAF4F] '>9000<span className='text-[25px] xl:text-[30px]'>BDT</span></p>
              <p className='font-pops font-medium text-[16px] text-overlay mt-[10px]'>Per year service & Maintenance</p>
            </div>
            <div className='flex items-center mt-[8px]'>
              <TbCurrencyTaka className='mr-[1px] text-[20px] text-primary' />
              <p className='font-pops font-medium text-[16px] text-primary'>. 9000</p>
            </div>
            <div className='mt-[30px] leading-10'>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>05 GB Storage</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>100 GB Bandwidth</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>100 Mysql Database</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>50 Email Address</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>All Basic Hosting Features</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text-[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>24/7/365 Tech Support</p>
              </div>
            </div>
            <Link to='/ContactDetails'>
              <button className='font-pops font-semibold text-[18px] xl:text-[20px] text-white bg-[#4CAF4F] py-[15px] w-full rounded mt-[40px]'>Order Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


export default WebHostingPackage