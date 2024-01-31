import React from 'react'
import hosting from '../../assets/images/hosting.avif'
import { MdCheckCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

const PremiumHosting = () => {
  return (
    <div className='bg-white pt-[235px] pb-[100px]'>
      <div className='max-w-container mx-auto'>
        <p className='font-pops font-bold text-[36px] text-[#1C1E53]'>Premium Web Hosting</p>
        <div className='flex justify-between items-center'>
          <div className='border-b-2'>
            <div className=''>
              <p className='font-pops font-medium text-[18px] text-overlay mb-[30px] w-[865px] leading-9'>CREATIVE IT is one of the best web hosting companies in Bangladesh. Our employees to provide you superior around the clock support. We are the perfect choice whether you are looking for business, personal, or any other purposes. Every web hosting plan comes with a 45 day money back guarantee, 99.9% uptime guarantee. We ensure you to provide excellence and hassle free web hosting service.</p>
            </div>
            <div className='flex items-center mb-[30px]'>
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
              <div className='ml-[300px]'>
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
          <div className='ml-[100px]'>
            <img src={hosting} alt="" />
          </div>
        </div>
        <div className='mt-[30px]'>
          <Link to='/ExploreReadyProducts'><button className='font-pops text-[20px] font-semibold text-white border-none px-[42px] py-[14px] bg-primary hover:bg-[#5F35F5] rounded transition duration-300 ease-in-out'>View Package</button></Link>
        </div>
      </div>
    </div>
  )
}

export default PremiumHosting