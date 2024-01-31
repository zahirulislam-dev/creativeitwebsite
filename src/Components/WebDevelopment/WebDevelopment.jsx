import React from 'react'
import softwareDev from '../../assets/images/softwareDev.jpg'
import { MdCheckCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  return (
    <div className='bg-white pt-[235px] pb-[100px]'>
      <div className='max-w-container mx-auto'>
        <p className='font-pops font-bold text-[36px] text-[#1C1E53] mb-[30px]'>Web Development Details</p>
        <div className='flex justify-between items-center'>
          <div className='border-b-2'>
            <div className=''>
              <p className='font-pops font-medium text-[18px] text-overlay mb-[30px] w-[990px] leading-9'>We are developing customized software for small to large businesses, Education institutes and organizations. The advantages of using an automation system are considerable. That’s able to manage your business or office easier and first. Our motto is user-friendly software development for our clients with multi-languages. Data or information management is no easy task for any human. So we want to simplify your business process with the smart automation system. It can save you time. You can get reliability on developing your data management system to us. We ensure you provide the best after-sales service & security which is very important in the work.</p>
            </div>
            <div className='flex items-center mb-[30px]'>
              <div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Robust</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Comparable</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Quality</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Reasonable Development Cost</p>
                </div>
              </div>
              <div className='ml-[300px]'>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Reliable</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Customized</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>User Friendly</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Best Support</p>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#F5F7FA] p-[30px] rounded-[20px] ml-[100px]'>
            <img src={softwareDev} alt="" />
          </div>
        </div>
        <div className='mt-[30px]'>
        <Link to='/ExploreReadyProducts'><button className='font-pops text-[20px] font-semibold text-white border-none px-[42px] py-[14px] bg-primary hover:bg-[#5F35F5] rounded transition duration-300 ease-in-out'>View Our Ready Products</button></Link>
        </div>
      </div>
    </div>
  )
}

export default WebDevelopment