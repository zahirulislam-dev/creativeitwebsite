import React from 'react'
import cPos from '../../assets/images/cPos.jpg'
import { FaDownload } from "react-icons/fa";
import { PiDotFill } from "react-icons/pi";

const PharmaPosProduct = () => {
  return (
    <div className='bg-white pt-[160px] sm:pt-[150px] pb-[30px] md:pt-[155px] lg:pt-[170px] xl:pt-[200px] md:pb-[50px]'>
      <div className='max-w-container mx-auto px-[10px] xl:px-0'>
        <div className='xl:flex xl:justify-between xl:items-center'>
          <h4 className='font-pops font-bold text-[20px] xl:text-[28px] text-[#4CAF4F] mb-[20px]'>Pharmacy Shop Management Online POS Software</h4>
          <div className='flex justify-center items-center bg-[#5F35F5] py-[14px] px-[20px] hover:bg-green-500 transition duration-300 ease-in-out rounded'>
            <FaDownload className='text-white text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]' />
            <button className='font-pops font-bold text-[18px] xl:text-[20px] text-white'>Download PDF Document</button>
          </div>
        </div>
        <div className='xl:flex xl:justify-between'>
          <div className='mr-0 xl:mr-[50px]'>
            <div>
              <div className='mb-[25px] mt-[20px]'>
                <p className='font-pops font-bold text-[16px] xl:text-[18px] text-white bg-slate-600 rounded p-[15px]'>English & Bangla Online Responsive</p>
                {/* <p className='font-pops font-bold text-[18px] text-white bg-teal-600 rounded p-[5px] mr-[15px]'>LUD: 2022-08-02</p>
                <p className='font-pops font-bold text-[18px] text-white bg-blue-600 rounded p-[5px]'>V-2.0.1</p> */}
              </div>
              <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:w-[962px] leading-9'>You can use this software in Pharmacy shop/ showroom, general stores, super shops, department stores. You can sale medicine piece, stripe & box system. Many more features include purchase, sale, stock, purchase, staff, user & all-important report. This software will go a long way in making your business easier and more dynamic. It has a user-friendly design, in the Bengali / English language</p>
            </div>
            <div className='xl:flex xl:justify-between border-t-2'>
              <div className='leading-10'>
                <h6 className='font-pops font-bold text-[18px] xl:text-[20px] text-overlay mt-[20px] mb-[10px]'>Yearly Package</h6>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]' />
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>Setup Charge OneTime BDT. 25000/-</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]' />
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>Server & Maintenance BDT. 12000/y</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]' />
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>No hidden cost</p>
                </div>
              </div>
              <div className='leading-10'>
                <h6 className='font-pops font-bold text-[18px] xl:text-[20px] text-overlay mt-[20px] mb-[10px]'>Monthly Package</h6>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]' />
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>Setup Charge OneTime BDT. 15000/-</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]' />
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>Server & Maintenance BDT. 1500/mo</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]' />
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>No hidden cost</p>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <img src={cPos} alt="" className='mt-[30px] xl:mt-[50px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PharmaPosProduct