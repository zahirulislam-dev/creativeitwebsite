import React from 'react'
import cPos from '../../assets/images/cPos.jpg'
import { FaDownload } from "react-icons/fa";
import { PiDotFill } from "react-icons/pi";

const DiagnosticProduct = () => {
  return (
    <div className='bg-white pt-[235px] pb-[50px] xl:pb-[100px]'>
      <div className='max-w-container mx-auto px-[10px] xl:px-0'>
        <div className='xl:flex xl:justify-between xl:items-center'>
          <h4 className='font-pops font-bold text-[20px] xl:text-[28px] text-[#4CAF4F] mb-[20px]'>Diagnostic Center Management Online Software</h4>
          <div className='flex items-center bg-[#5F35F5] py-[14px] px-[20px] hover:bg-green-500 transition duration-300 ease-in-out rounded mb-[20px] xl:mb-0'>
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
              <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:w-[962px] leading-9'>This software is designed to help Diagnostic professionals manage their daily tasks, streamline processes, and improve patient care. These software programs can include electronic medical records (EMRs), patient scheduling systems, billing and insurance management tools, and clinical decision support systems. They can also help improve patient outcomes by providing doctors with real-time access to patient data and medical histories, as well as facilitating communication and collaboration between healthcare professionals. Overall, hospital, diagnostic, and clinic software are essential tools for healthcare organizations looking to provide high-quality care and streamline their operations.</p>
            </div>
            <div className='xl:flex xl:justify-between border-t-2'>
              <div className='leading-9'>
                <h6 className='font-pops font-bold text-[18px] xl:text-[20px] text-overlay mt-[20px] mb-[10px]'>Yearly Package</h6>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]'/>
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>Setup Charge OneTime BDT. 55000/-</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]'/>
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>Server & Maintenance BDT. 24000/y</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]'/>
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>No hidden cost</p>
                </div>
              </div>
              <div className='leading-9'>
                <h6 className='font-pops font-bold text-[18px] xl:text-[20px] text-overlay mt-[20px] mb-[10px]'>Monthly Package</h6>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]'/>
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>Setup Charge OneTime BDT. 35000/-</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]'/>
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>Server & Maintenance BDT. 3000/mo</p>
                </div>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]'/>
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

export default DiagnosticProduct