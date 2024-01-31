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
    <div className='bg-[#F5F7FA] py-[100px]'>
      <div className='max-w-container mx-auto'>
        <p className='font-pops font-bold text-[64px] text-[#1C1E53] text-center mb-[30px]'>WEB HOSTING PACKAGES</p>
        <p className='font-pops font-medium text-[20px] text-overlay text-center mb-[50px]'>Choose your package from our package list</p>
        <div className='flex flex-wrap'>
          <div className='bg-[#fff] px-[25px] py-[30px] shadow rounded w-[352px] mr-[30px]'>
            <h3 className='font-pops font-semibold text-[30px] text-[#1C1E53]'>Basic</h3>
              <p className='font-pops font-medium text-[20px] text-[#5F35F5] mt-[8px]'>Premium</p>
            <div className='mt-[15px]'>
              <p className='font-pops font-medium text-[60px] text-[#4CAF4F] '>2000<span className='text-[30px]'>BDT</span></p>
              <p className='font-pops font-medium text-[16px] text-overlay mt-[10px]'>Per year service & Maintenance</p>
            </div>
            <div className='flex items-center mt-[8px]'>
              <TbCurrencyTaka className='mr-[1px] text-[20px] text-primary' />
              <p className='font-pops font-medium text-[16px] text-primary'>. 2000</p>
            </div>
            <div className='mt-[30px] leading-10'>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>500 MB Storage</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>10 GB Bandwidth</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>05 Mysql Database</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>10 Email Address</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>All Basic Hosting Features</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>24/7/365 Tech Support</p>
              </div>
            </div>
            <Link to='/ContactDetails'>
              <button className='font-pops font-semibold text-[20px] text-white bg-[#4CAF4F] py-[15px] px-[32px] rounded mt-[40px]'>Order Now</button>
            </Link>
          </div>
          <div className='bg-[#fff] px-[25px] py-[30px] shadow rounded w-[352px] mr-[30px]'>
            <h3 className='font-pops font-semibold text-[30px] text-[#1C1E53]'>Advance</h3>
              <p className='font-pops font-medium text-[20px] text-[#5F35F5] mt-[8px]'>Premium</p>
            <div className='mt-[15px]'>
              <p className='font-pops font-medium text-[60px] text-[#4CAF4F] '>3000<span className='text-[30px]'>BDT</span></p>
              <p className='font-pops font-medium text-[16px] text-overlay mt-[10px]'>Per year service & Maintenance</p>
            </div>
            <div className='flex items-center mt-[8px]'>
              <TbCurrencyTaka className='mr-[1px] text-[20px] text-primary' />
              <p className='font-pops font-medium text-[16px] text-primary'>. 3000</p>
            </div>
            <div className='mt-[30px] leading-10'>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>1 GB Storage</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>20 GB Bandwidth</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>10 Mysql Database</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>10 Email Address</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>All Basic Hosting Features</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>24/7/365 Tech Support</p>
              </div>
            </div>
            <Link to='/ContactDetails'>
              <button className='font-pops font-semibold text-[20px] text-white bg-[#4CAF4F] py-[15px] px-[32px] rounded mt-[40px]'>Order Now</button>
            </Link>
          </div>
          <div className='bg-[#fff] px-[25px] py-[30px] shadow rounded w-[352px] mr-[30px]'>
            <h3 className='font-pops font-semibold text-[30px] text-[#1C1E53]'>Professional</h3>
              <p className='font-pops font-medium text-[20px] text-[#5F35F5] mt-[8px]'>Premium</p>
            <div className='mt-[15px]'>
              <p className='font-pops font-medium text-[60px] text-[#4CAF4F] '>5000<span className='text-[30px]'>BDT</span></p>
              <p className='font-pops font-medium text-[16px] text-overlay mt-[10px]'>Per year service & Maintenance</p>
            </div>
            <div className='flex items-center mt-[8px]'>
              <TbCurrencyTaka className='mr-[1px] text-[20px] text-primary' />
              <p className='font-pops font-medium text-[16px] text-primary'>. 5000</p>
            </div>
            <div className='mt-[30px] leading-10'>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>2 GB Storage</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>40 GB Bandwidth</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>20 Mysql Database</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>20 Email Address</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>All Basic Hosting Features</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>24/7/365 Tech Support</p>
              </div>
            </div>
            <Link to='/ContactDetails'>
              <button className='font-pops font-semibold text-[20px] text-white bg-[#4CAF4F] py-[15px] px-[32px] rounded mt-[40px]'>Order Now</button>
            </Link>
          </div>
          <div className='bg-[#fff] px-[25px] py-[30px] shadow rounded w-[352px] mr-[30px]'>
            <h3 className='font-pops font-semibold text-[30px] text-[#1C1E53]'>Professional Plus</h3>
              <p className='font-pops font-medium text-[20px] text-[#5F35F5] mt-[8px]'>Premium</p>
            <div className='mt-[15px]'>
              <p className='font-pops font-medium text-[60px] text-[#4CAF4F] '>9000<span className='text-[30px]'>BDT</span></p>
              <p className='font-pops font-medium text-[16px] text-overlay mt-[10px]'>Per year service & Maintenance</p>
            </div>
            <div className='flex items-center mt-[8px]'>
              <TbCurrencyTaka className='mr-[1px] text-[20px] text-primary' />
              <p className='font-pops font-medium text-[16px] text-primary'>. 9000</p>
            </div>
            <div className='mt-[30px] leading-10'>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>05 GB Storage</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>100 GB Bandwidth</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>100 Mysql Database</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>50 Email Address</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>All Basic Hosting Features</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[10px] text-[22px]' />
                <p className='font-pops font-regular text-[20px] text-overlay'>24/7/365 Tech Support</p>
              </div>
            </div>
            <Link to='/ContactDetails'>
              <button className='font-pops font-semibold text-[20px] text-white bg-[#4CAF4F] py-[15px] px-[32px] rounded mt-[40px]'>Order Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


export default WebHostingPackage