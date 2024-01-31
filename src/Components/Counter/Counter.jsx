import React from 'react'
import { FaStar } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { FaCheckSquare } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const Counter = () => {
  return (
    <div className='bg-[#000020] py-[100px]'>
        <div className='max-w-container mx-auto px-[10px] xl:px-0'>
          <div className='md:flex md:justify-between'>
              <div className=' flex flex-col items-center'>
                <FaStar className='text-white text-[45px] mb-[5px]'/>
                <p className='font-pops font-bold text-[45px] text-[#fff] mb-[5px]'>5</p>
                <p className='font-pops font-regular text-[25px] text-[#fff]'>Year of Experience</p>
              </div>
              <div className='flex flex-col items-center mt-[50px] md:mt-0'>
              <IoPeople className='text-white text-[45px] mb-[5px] text-center'/>
              <p className='font-pops font-bold text-[45px] text-[#fff] text-center mb-[5px]'>300</p>
              <p className='font-pops font-regular text-[25px] text-[#fff] text-center'>Happy Clients</p> 
              </div>
              <div className='flex flex-col items-center mt-[50px] md:mt-0'>
              <FaCheckSquare className='text-white text-[45px] mb-[5px] text-center'/>
              <p className='font-pops font-bold text-[45px] text-[#fff] text-center mb-[5px]'>450</p>
              <p className='font-pops font-regular text-[25px] text-[#fff] text-center'>Project Complete</p> 
              </div>
              <div className='flex flex-col items-center mt-[50px] md:mt-0'>
              <FaUsers className='text-white text-[45px] mb-[5px] text-center'/>
              <p className='font-pops font-bold text-[45px] text-[#fff] text-center mb-[5px]'>8</p>
              <p className='font-pops font-regular text-[25px] text-[#fff] text-center'>Team Members</p> 
              </div>
          </div>
        </div>
    </div>
  )
}

export default Counter