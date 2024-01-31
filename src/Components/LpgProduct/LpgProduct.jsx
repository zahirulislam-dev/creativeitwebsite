import React from 'react'
import cPos from '../../assets/images/cPos.jpg'
import { FaDownload } from "react-icons/fa";
import { PiDotFill } from "react-icons/pi";

const LpgProduct = () => {
  return (
    <div className='bg-white pt-[235px] pb-[100px]'>
      <div className='max-w-container mx-auto'>
        <div className='flex justify-between items-center'>
          <h4 className='font-pops font-bold text-[28px] text-[#4CAF4F] mb-[20px]'>LPG Business Dealership, Distribution Accounting Management Online Software</h4>
          <div className='flex items-center bg-[#5F35F5] py-[14px] px-[20px] hover:bg-green-500 transition duration-300 ease-in-out rounded'>
            <FaDownload className='text-white text-[25px] mr-[8px]' />
            <button className='font-pops font-bold text-[20px] text-white'>Download PDF Document</button>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='mr-[50px]'>
            <div>
              <div className='flex items-center mb-[25px]'>
                <p className='font-pops font-bold text-[18px] text-white bg-slate-600 rounded p-[5px] mr-[15px]'>English & Bangla Online Responsive</p>
                <p className='font-pops font-bold text-[18px] text-white bg-teal-600 rounded p-[5px] mr-[15px]'>LUD: 2022-08-02</p>
                <p className='font-pops font-bold text-[18px] text-white bg-blue-600 rounded p-[5px]'>V-2.0.1</p>
              </div>
              <p className='font-pops font-medium text-[18px] text-overlay mb-[20px] w-[962px] leading-9'>You can use this version of the software at any shop/ showroom. For an example: Grocery, Deparment, Hardware, Cosmetics, Furniture, Parts, Retail & Whole Sale all shop etc. Reliable customer service will be ensured at all times. This software is available in both Bengali and English languages. The software will be a Highly user-friendly interface with slow internet speed. The entire software is our own written code and designed using the suggestions from the respective sectors to develop it. The software will be helpful for your organization.</p>
            </div>
            <div className='flex justify-between border-t-2'>
              <div className='leading-9'>
                <h6 className='font-pops font-bold text-[20px] text-overlay mt-[20px] mb-[20px]'>Yearly Package</h6>
                <div className='flex items-center'>
                  <PiDotFill className='text-[25px] mr-[8px]'/>
                  <p className='font-pops font-regular text-[18px] text-overlay'>Setup Charge OneTime BDT.  35000/-</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[25px] mr-[8px]'/>
                  <p className='font-pops font-regular text-[18px] text-overlay'>Server, Maintenance BDT. 12000/yearly</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[25px] mr-[8px]'/>
                  <p className='font-pops font-regular text-[18px] text-overlay'>No hidden cost</p>
                </div>
              </div>
              <div className='leading-9'>
                <h6 className='font-pops font-bold text-[20px] text-overlay mt-[20px] mb-[20px]'>Monthly Package</h6>
                <div className='flex items-center'>
                  <PiDotFill className='text-[25px] mr-[8px]'/>
                  <p className='font-pops font-regular text-[18px] text-overlay'>Setup Charge OneTime BDT. 20000/-</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[25px] mr-[8px]'/>
                  <p className='font-pops font-regular text-[18px] text-overlay'>Server, Maintenance BDT. 1500/monthly</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[25px] mr-[8px]'/>
                  <p className='font-pops font-regular text-[18px] text-overlay'>No hidden cost</p>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <img src={cPos} alt="" className='mt-[50px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LpgProduct