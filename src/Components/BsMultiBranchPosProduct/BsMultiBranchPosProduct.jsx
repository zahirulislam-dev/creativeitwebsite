import React from 'react'
import bsPos from '../../assets/images/bsPos.png'
import { FaDownload } from "react-icons/fa";
import { PiDotFill } from "react-icons/pi";

const BsMultiBranchPosProduct = () => {
  return (
    <div className='bg-white pt-[235px] pb-[50px] xl:pb-[100px]'>
      <div className='max-w-container mx-auto px-[10px] xl:px-0'>
        <div className='xl:flex xl:justify-between xl:items-center'>
          <h4 className='font-pops font-bold text-[20px] xl:text-[28px] text-[#4CAF4F] mb-[20px] xl:w-[1076px]'>Fashion House, Footwear Store, Brand Shop Multiple Branch Management erp Online Software</h4>
          <div className='flex items-center bg-[#5F35F5] py-[14px] px-[20px] mb-[20px] xl:mb-0 hover:bg-green-500 transition duration-300 ease-in-out rounded'>
            <FaDownload className='text-white text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]' />
            <button className='font-pops font-bold text-[18px] xl:text-[20px] text-white'>Download PDF Document</button>
          </div>
        </div>
        <div className='xl:flex xl:justify-between'>
          <div className='mr-0 xl:mr-[50px]'>
            <div>
              <div className='mb-[25px]'>
                <p className='font-pops font-bold text-[16px] xl:text-[18px] text-white bg-slate-600 rounded p-[15px]'>English & Bangla Online Responsive</p>
                {/* <p className='font-pops font-bold text-[18px] text-white bg-teal-600 rounded p-[5px] mr-[15px]'>LUD: 2022-08-02</p>
                <p className='font-pops font-bold text-[18px] text-white bg-blue-600 rounded p-[5px]'>V-2.0.1</p> */}
              </div>
              <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:w-[1100px] leading-9'>You can use this version of the software at any multiple branch/ outlet ready garments shop, boutick house shop, footwear shop. Reliable customer service will be ensured at all times. This software is available in both Bengali and English languages. The software will be a Highly user-friendly interface with slow internet speed. The entire software is our own written code and designed using the suggestions from the respective sectors to develop it. The software will be helpful for your organization.</p>
            </div>
            <div className='xl:flex xl:justify-between border-t-2'>
              <div className='leading-10'>
                <h6 className='font-pops font-bold text-[18px] xl:text-[20px] text-overlay mt-[20px] mb-[10px]'>Yearly Package</h6>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]'/>
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>Setup Charge for MainBranch OneTime BDT. 25000/-</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]'/>
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>Setup Charge for Every SubBranch OneTime BDT. 18000/-</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]'/>
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay '>Customize Price Will Be Applicable By Negotiable </p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]'/>
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>Server & Maintenance for Every Branch BDT. 12000/y</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]'/>
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>No hidden cost</p>
                </div>
              </div>
              <div className='leading-10'>
                <h6 className='font-pops font-bold text-[18px] xl:text-[20px] text-overlay mt-[20px] mb-[10px]'>Monthly Package</h6>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]'/>
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>Setup Charge MainBranch OneTime BDT. 15000/-</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]'/>
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>Setup Charge Every SubBranch OneTime BDT. 12000/-</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]'/>
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>Any Customize or Correction not acceptable</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]'/>
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>Server & Maintenance for Every Branch BDT. 1500/mo</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]'/>
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>No hidden cost</p>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <img src={bsPos} alt="" className='mt-[30px] xl:mt-[50px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BsMultiBranchPosProduct