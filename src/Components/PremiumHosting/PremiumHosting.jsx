import React from 'react'
import hosting from '../../assets/images/hosting.avif'
import { MdCheckCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

const PremiumHosting = () => {
  return (
    <div className='bg-white pt-[235px] pb-[50px] xl:pb-[100px]'>
      <div className='max-w-container mx-auto px-[10px] xl:px-0'>
        <p className='font-pops font-bold text-[25px] xl:text-[36px] text-[#1C1E53]'>PREMIUM WEB HOSTING</p>
        <div className='xl:flex xl:justify-between xl:items-center'>
          <div className='border-b-2'>
            <div className='mt-[30px] xl:mt-0'>
              <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay mb-[30px] xl:w-[865px] leading-9'>Creative IT is one of the best web hosting companies in Bangladesh. Our employees to provide you superior around the clock support. We are the perfect choice whether you are looking for business, personal, or any other purposes. Every web hosting plan comes with a 45 day money back guarantee, 99.9% uptime guarantee. We ensure you to provide excellence and hassle free web hosting service.</p>
            </div>
            <div className='xl:flex xl:items-center mb-[30px]'>
              <div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Flexible Control Panel</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>45 Day Money Back Guarantee</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Latest CPanel Control Panel</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Fantastico</p>
                </div>
              </div>
              <div className='ml-0 xl:ml-[300px]'>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>99.9% Uptime Guarantee</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Safe Harbor Certified</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Website Statistics</p>
                </div>
              </div>
            </div>
          </div>
          <div className='ml-0 xl:ml-[100px] mt-[20px] xl:mt-0'>
            <img src={hosting} alt="" />
          </div>
        </div>
        <div className='mt-[30px]'>
          <Link to='/ExploreReadyProducts'><button className='font-pops text-[20px] font-semibold text-white border-none w-full sm:w-[300px] md:w-[358px] py-[14px] bg-primary hover:bg-[#5F35F5] rounded transition duration-300 ease-in-out'>View Package</button></Link>
        </div>
      </div>
    </div>
  )
}

export default PremiumHosting