import React from 'react'
import WebDesignDev from '../../assets/images/WebDesignDev.jpg'
import { MdCheckCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

const WebDesignDevelopment = () => {
  return (
    <div className='bg-white pt-[160px] sm:pt-[150px] pb-[30px] md:pt-[155px] lg:pt-[170px] xl:pt-[200px] md:pb-[50px]'>
      <div className='max-w-container mx-auto px-[10px] xl:px-0'>
        <p className='font-pops font-bold text-[25px] xl:text-[36px] text-[#1C1E53] mb-[20px]'>Web Design & Development Details</p>
        <div className='xl:flex xl:justify-between xl:items-center'>
          <div className='border-b-2'>
            <div className=''>
              <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:w-[990px] leading-9'>We developed any kinks of the website along with an interactive, strong & a user-friendly platform that is based on so much easy to update easy to manage content. We ensure High-level security, user rights protection, and are simultaneously updateable together one or more users. You can make any changes to your website anytime and anywhere. Choose your package from our package list & we all so developed customized web site as your demands.</p>
            </div>
            <div className='xl:flex xl:items-center mb-[20px]'>
              <div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>School Website</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Corporate Website</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>News Portal</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Personal Website</p>
                </div>
              </div>
              <div className='ml-0 xl:ml-[300px]'>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>College Website</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Blog</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>E-Commerce Website</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Organization Website</p>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#F5F7FA] p-[15px] xl:p-[30px] rounded-[20px] ml-0 xl:ml-[100px] mt-[20px] xl:mt-0'>
            <img src={WebDesignDev} alt="" className='w-full h-full'/>
          </div>
        </div>
        <div className='mt-[30px]'>
        <Link to='/ExploreReadyProducts'><button className='font-pops text-[20px] font-semibold text-white border-none w-full sm:w-[300px] md:w-[358px] py-[14px] bg-primary hover:bg-[#5F35F5] rounded transition duration-300 ease-in-out'>View Our Ready Products</button></Link>
        </div>
      </div>
    </div>
  )
}

export default WebDesignDevelopment