import React from 'react'
import { PiDotFill } from "react-icons/pi";
import BannerPic from '../../assets/images/BannerPic.png'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='bg-[#4364F7] bg-no-repeat bg-center bg-cover pt-[162px] sm:pt-[150px] md:pt-[140px] lg:pt-[160px] xl:pt-[200px] md:pb-[60px] pb-[40px]'>
      <div className='max-w-container mx-auto px-[10px] xl:px-0'>
        <div className='flex-wrap md:flex md:items-center md:justify-between'>
          <div>
            <h1 className='font-pops text-[25px] md:text-[45px] font-semibold md:font-bold text-white md:w-[800px] lg:w-[917px] mb-[20px] xl:mb-[50px]'>
            READY & CUSTOMIZE BEST POS SOFTWARE IN BANGLADESH
            </h1>
            <p className='font-pops xl:text-[25px] text-[16px] font-semibold text-white leading-8 md:tracking-wide md:w-[700px] lg:w-[818px] mb-[30px]'>The Largest Retailsale And Wholesale POS Software & Solutions Provider In Bangladesh.</p>
            <p className='font-pops md:text-[18px] text-[16px] font-medium text-white leading-8 md:tracking-wide md:w-[700px] lg:w-[818px] mb-8'>We work to make your life easier and more dynamic through loading less technology. We are providing Accounting, Inventory & Billing Management software for small to large business organizations. Currently, Also we are providing the following services...</p>
            <div className='flex items-center'>
              <PiDotFill className='text-white text-[30px]' />
              <Link to='/webdevelopmentdetails'><button className='font-pops md:text-[18px] text-[16px] font-medium text-white ml-[5px] hover:text-[#1C1E53] transition duration-300 ease-in-out'>Software Development</button></Link>
            </div>
            <div className='flex'>
              <PiDotFill className='text-white text-[30px]' />
              <Link to='/webdesigndevelopmentdetails'><button className='font-pops md:text-[18px] text-[16px] font-medium text-white ml-[5px] hover:text-[#1C1E53] transition duration-300 ease-in-out'>Web Design & Development</button></Link>
            </div>
            <div className='flex'>
              <PiDotFill className='text-white text-[30px]' />
              <Link to='/webappdevelopmentdetails'><button className='font-pops md:text-[18px] text-[16px] font-medium text-white ml-[5px] hover:text-[#1C1E53] transition duration-300 ease-in-out'>Web Application Develpment</button></Link>
            </div>
            <div className='flex'>
              <PiDotFill className='text-white text-[30px]' />
              <Link to='/mobileappdevelopmentdetails'><button className='font-pops md:text-[18px] text-[16px] font-medium text-white ml-[5px] hover:text-[#1C1E53] transition duration-300 ease-in-out'>Andorid App Development</button></Link>
            </div>
            <div className='flex'>
              <PiDotFill className='text-white text-[30px]' />
              <button className='font-pops md:text-[18px] text-[16px] font-medium text-white ml-[5px] hover:text-[#1C1E53] transition duration-300 ease-in-out'>Digital Marketing</button>
            </div>
            <div className='mt-[38px]'>
              <Link to='/explorereadyproducts'>
                <button className='font-pops text-[16px] md:text-[20px] font-semibold text-[#4364F7] border-none py-[14px] bg-white hover:text-[#FFB800] rounded w-full sm:w-[300px] md:w-[358px]'>Explore Our Ready POS Software</button>
              </Link>
            </div>
          </div>
          <div>
            <img src={BannerPic} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner