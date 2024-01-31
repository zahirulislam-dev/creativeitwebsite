import React from 'react'
import WebDesignDev from '../../assets/images/WebDesignDev.jpg'
import { MdCheckCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

const WebDesignDevelopment = () => {
  return (
    <div className='bg-white pt-[235px] pb-[100px]'>
      <div className='max-w-container mx-auto'>
        <p className='font-pops font-bold text-[36px] text-[#1C1E53] mb-[30px]'>Web Design & Development Details</p>
        <div className='flex justify-between items-center'>
          <div className='border-b-2'>
            <div className=''>
              <p className='font-pops font-medium text-[18px] text-overlay mb-[30px] w-[990px] leading-9'>We developed any kinks of the website along with an interactive, strong & a user-friendly platform that is based on so much easy to update easy to manage content. We ensure High-level security, user rights protection, and are simultaneously updateable together one or more users. You can make any changes to your website anytime and anywhere. Choose your package from our package list & we all so developed customized web site as your demands.</p>
            </div>
            <div className='flex items-center mb-[30px]'>
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
              <div className='ml-[300px]'>
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
          <div className='bg-[#F5F7FA] p-[30px] rounded-[20px] ml-[100px]'>
            <img src={WebDesignDev} alt="" />
          </div>
        </div>
        <div className='mt-[30px]'>
        <Link to='/ExploreReadyProducts'><button className='font-pops text-[20px] font-semibold text-white border-none px-[42px] py-[14px] bg-primary hover:bg-[#5F35F5] rounded transition duration-300 ease-in-out'>View Our Ready Products</button></Link>
        </div>
      </div>
    </div>
  )
}

export default WebDesignDevelopment