import React from 'react'
import cPos from '../../assets/images/cPos.jpg'
import { FaDownload } from "react-icons/fa";
import { PiDotFill } from "react-icons/pi";

const DealershipDistributionProduct = () => {
  return (
    <div className='bg-white pt-[235px] pb-[50px] xl:pb-[100px]'>
      <div className='max-w-container mx-auto px-[10px] xl:px-0'>
        <div className='xl:flex xl:justify-between xl:items-center'>
          <h4 className='font-pops font-bold text-[20px] xl:text-[28px] text-[#4CAF4F] mb-[20px]'>Dealership & Distribution Management Online POS Software</h4>
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
              <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[20px] xl:w-[962px] leading-9'>Our distribution and dealership software is a powerful online web application that streamlines the entire process of managing distribution and dealership operations. With our software, you can easily manage inventory, track sales, monitor orders, and handle other critical tasks all from one central location.Our software is designed to meet the specific needs of distribution and dealership businesses, offering a range of features that make managing your operations easier and more efficient. For example, our inventory management tools allow you to track and manage inventory levels in real-time, ensuring that you always have the right products on hand to meet customer demand. Our software also includes robust sales tracking and order management features that enable you to monitor sales performance, process orders, and generate detailed reports on sales trends and performance metrics. With our software, you can identify opportunities for growth, optimize your sales strategies, and make data-driven decisions that drive business success.</p>
            </div>
            <div className='xl:flex xl:justify-between border-t-2'>
              <div className='leading-10'>
                <h6 className='font-pops font-bold text-[18px] xl:text-[20px] text-overlay mt-[20px] mb-[10px]'>Yearly Package</h6>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]'/>
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>Setup Charge OneTime BDT. 35000/-</p>
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
              <div className='leading-10'>
                <h6 className='font-pops font-bold text-[18px] xl:text-[20px] text-overlay mt-[20px] mb-[10px]'>Monthly Package</h6>
                <div className='flex items-center'>
                  <PiDotFill className='text-[20px] xl:text-[25px] mr-[5px] xl:mr-[8px]'/>
                  <p className='font-pops font-regular text-[16px] xl:text-[18px] text-overlay'>Setup Charge OneTime BDT. 20000/-</p>
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

export default DealershipDistributionProduct