import React from 'react'
import softwareDev from '../../assets/images/softwareDev.jpg'
import WebDesignDev from '../../assets/images/WebDesignDev.jpg'
import WebApp from '../../assets/images/WebApp.jpg'
import MobileAppDev from '../../assets/images/MobileAppDev.jpg'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom'

const WhatWeDo = () => {
  return (
    <div className='bg-[#F5F7FA] py-[50px] xl:py-[100px]'>
      <div className='max-w-container mx-auto px-[10px] xl:px-0'>
        <p className='font-pops font-bold text-[36px] text-[#1C1E53] text-center mb-[30px] xl:mb-[50px]'>OUR SERVICES</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]'>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
                  <div className=''>
                    <img src={softwareDev} alt="" className='w-[100px] h-[100px] mb-[10px] mx-auto'/>
                    <h3 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Software Development</h3>
                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay text-center mb-[15px] leading-9'>We are developing customized software for small to large businesses, Edu...</p>
                  </div>
                  <Link to='/WebDevelopmentDetails'>
                  <div className='flex items-center justify-center'>
                    <button className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F]'>Read more</button>
                    <GoArrowRight className='text-[#4CAF4F]'/>
                  </div>
                  </Link>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
                  <div className=''>
                    <img src={WebDesignDev} alt="" className='w-[100px] h-[100px] mb-[10px] mx-auto'/>
                    <h4 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Web Design & Development</h4>
                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay text-center mb-[15px] leading-9'>We developed any kinks of the website along with an interactive, strong ...</p>
                  </div>
                  <Link to='/WebDesignDevelopmentDetails'>
                  <div className='flex items-center justify-center'>
                    <button className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F]'>Read more</button>
                    <GoArrowRight className='text-[#4CAF4F]'/>
                  </div>
                  </Link>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
                  <div className=''>
                    <img src={WebApp} alt="" className='w-[100px] h-[100px] mb-[10px] mx-auto'/>
                    <h5 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Web App Development</h5>
                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay text-center mb-[15px] leading-9'>We are including web application development services since 2019. The we...</p>
                  </div>
                  <Link to='/WebAppDevelopmentDetails'>
                  <div className='flex items-center justify-center'>
                    <button className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F]'>Read more</button>
                    <GoArrowRight className='text-[#4CAF4F]'/>
                  </div>
                  </Link>
                </div>
                <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
                  <div className=''>
                    <img src={MobileAppDev} alt="" className='w-[100px] h-[100px] mb-[10px] mx-auto'/>
                    <h6 className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F] text-center mb-[20px]'>Mobile App Development</h6>
                    <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay text-center mb-[15px] leading-9'>We are including web application development services since 2019. The we...</p>
                  </div>
                  <Link to='/MobileAppDevelopmentDetails'>
                  <div className='flex items-center justify-center'>
                    <button className='font-pops font-semibold text-[18px] xl:text-[20px] text-[#4CAF4F]'>Read more</button>
                    <GoArrowRight className='text-[#4CAF4F]'/>
                  </div>
                  </Link>
                </div>
            </div>
      </div>
    </div>
  )
}

export default WhatWeDo