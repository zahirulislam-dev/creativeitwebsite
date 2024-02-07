import React from 'react'
import softwareDev from '../../assets/images/softwareDev.jpg'
import WebDesignDev from '../../assets/images/WebDesignDev.jpg'
import WebApp from '../../assets/images/WebApp.jpg'
import MobileAppDev from '../../assets/images/MobileAppDev.jpg'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom'
import { TbCurrencyTaka } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const WebsitePackage = () => {
  return (
    <div className='bg-[#F5F7FA] pt-[160px] sm:pt-[150px] pb-[30px] md:pt-[155px] lg:pt-[170px] xl:pt-[200px] md:pb-[50px]'>
      <div className='max-w-container mx-auto px-[10px] xl:px-0'>
        <p className='font-pops font-bold text-[30px] xl:text-[64px] text-[#1C1E53] text-center mb-[15px] xl:mb-[30px]'>WEBSITE PACKAGES</p>
        <p className='font-pops font-medium text-[18px] xl:text-[20px] text-overlay text-center mb-[30px] xl:mb-[50px]'>Choose your package from our package list & we all so developed customized website as your demands.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]'>
          <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
            <h3 className='font-pops font-semibold text-[25px] xl:text-[30px] text-[#1C1E53]'>Education & Org.</h3>
            <div className='flex items-center'>
              <CgSpinnerTwoAlt className='text-[20px] xl:text-[22px] text-[#5F35F5] mr-[5px] xl:mr-[8px]' />
              <button className='font-pops font-medium text-[18px] xl:text-[20px] text-[#5F35F5] mt-[8px]'>Demo Link</button>
            </div>
            <div className='mt-[15px]'>
              <p className='font-pops font-medium text-[45px] xl:text-[60px] text-[#4CAF4F] '>25000<span className='text-[25px] xl:text-[30px]'>BDT</span></p>
              <p className='font-pops font-medium text-[16px] text-overlay mt-[10px]'>Per year service & Maintenance</p>
            </div>
            <div className='flex items-center mt-[8px]'>
              <TbCurrencyTaka className='mr-[1px] text-[20px] text-primary' />
              <p className='font-pops font-medium text-[16px] text-primary'>. 12000</p>
            </div>
            <div className='mt-[30px] leading-10'>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>.bd Domain</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Basic Hosting</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>30 Ready Page Design</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>No Page Limit</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Custom CMS</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Basic SEO</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Development Time 14 Days</p>
              </div>
            </div>
            <Link to='/ContactDetails'>
              <button className='font-pops font-semibold text-[18px] xl:text-[20px] text-white bg-[#4CAF4F] py-[15px] px-[32px] rounded mt-[40px] w-full'>Order Now</button>
            </Link>
          </div>
          <div className='bg-[#fff] px-[23px] py-[30px] shadow rounded'>
            <h3 className='font-pops font-semibold text-[25px] xl:text-[30px] text-[#1C1E53]'>Business Website</h3>
            <div className='flex items-center'>
              <CgSpinnerTwoAlt className='text-[20px] xl:text-[22px] text-[#5F35F5] mr-[5px] xl:mr-[8px]' />
              <button className='font-pops font-medium text-[18px] xl:text-[20px] text-[#5F35F5] mt-[8px]'>Demo Link</button>
            </div>
            <div className='mt-[15px]'>
              <p className='font-pops font-medium text-[45px] xl:text-[60px] text-[#4CAF4F] '>35000<span className='text-[25px] xl:text-[30px]'>BDT</span></p>
              <p className='font-pops font-medium text-[16px] text-overlay mt-[10px]'>Per year service & Maintenance</p>
            </div>
            <div className='flex items-center mt-[8px]'>
              <TbCurrencyTaka className='mr-[1px] text-[20px] text-primary' />
              <p className='font-pops font-medium text-[16px] text-primary'>. 12000</p>
            </div>
            <div className='mt-[30px] leading-10'>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Domain</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Advance Hosting</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>15 Custom Page Design</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>No Page Limit</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Custom CMS</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Contact Form, SEO</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Development Time 14 Days</p>
              </div>
            </div>
            <Link to='/ContactDetails'>
              <button className='font-pops font-semibold text-[18px] xl:text-[20px] text-white bg-[#4CAF4F] py-[15px] px-[32px] rounded mt-[40px] w-full'>Order Now</button>
            </Link>
          </div>
          <div className='bg-[#fff] px-[23px] py-[30px] shadow rounded'>
            <h3 className='font-pops font-semibold text-[25px] xl:text-[30px] text-[#1C1E53]'>News & Megazine</h3>
            <div className='flex items-center'>
              <CgSpinnerTwoAlt className='text-[20px] xl:text-[22px] text-[#5F35F5] mr-[5px] xl:mr-[8px]' />
              <button className='font-pops font-medium text-[18px] xl:text-[20px] text-[#5F35F5] mt-[8px]'>Demo Link</button>
            </div>
            <div className='mt-[15px]'>
              <p className='font-pops font-medium text-[45px] xl:text-[60px] text-[#4CAF4F] '>45000<span className='text-[25px] xl:text-[30px]'>BDT</span></p>
              <p className='font-pops font-medium text-[16px] text-overlay mt-[10px]'>Per year service & Maintenance</p>
            </div>
            <div className='flex items-center mt-[8px]'>
              <TbCurrencyTaka className='mr-[1px] text-[20px] text-primary' />
              <p className='font-pops font-medium text-[16px] text-primary'>. 24000</p>
            </div>
            <div className='mt-[30px] leading-10'>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Domain</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Professional Hosting</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Unlimited Categories</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>No Page Limit</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Interactive widgets</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Basic SEO</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Development Time 21 Days</p>
              </div>
            </div>
            <Link to='/ContactDetails'>
              <button className='font-pops font-semibold text-[18px] xl:text-[20px] text-white bg-[#4CAF4F] py-[15px] px-[32px] rounded mt-[40px] w-full'>Order Now</button>
            </Link>
          </div>
          <div className='bg-[#fff] px-[23px] py-[30px] shadow rounded'>
            <h3 className='font-pops font-semibold text-[25px] xl:text-[30px] text-[#1C1E53]'>eCommerce Website</h3>
            <div className='flex items-center'>
              <CgSpinnerTwoAlt className='text-[20px] xl:text-[22px] text-[#5F35F5] mr-[5px] xl:mr-[8px]' />
              <button className='font-pops font-medium text-[18px] xl:text-[20px] text-[#5F35F5] mt-[8px]'>Demo Link</button>
            </div>
            <div className='mt-[15px]'>
              <p className='font-pops font-medium text-[45px] xl:text-[60px] text-[#4CAF4F] '>65000<span className='text-[25px] xl:text-[30px]'>BDT</span></p>
              <p className='font-pops font-medium text-[16px] text-overlay mt-[10px]'>Per year service & Maintenance</p>
            </div>
            <div className='flex items-center mt-[8px]'>
              <TbCurrencyTaka className='mr-[1px] text-[20px] text-primary' />
              <p className='font-pops font-medium text-[16px] text-primary'>. 24000</p>
            </div>
            <div className='mt-[30px] leading-10'>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Domain</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Professional Hosting</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Product Display</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Products Order Receive</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Order Manage & Reports</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Advance Custom CMS</p>
              </div>
              <div className='flex items-center'>
                <GoDotFill className='mr-[5px] xl:mr-[8px] text=[20px] xl:text-[22px]' />
                <p className='font-pops font-regular text-[18px] xl:text-[20px] text-overlay'>Development Time 21 Days</p>
              </div>
            </div>
            <Link to='/ContactDetails'>
              <button className='font-pops font-semibold text-[18px] xl:text-[20px] text-white bg-[#4CAF4F] py-[15px] px-[32px] rounded mt-[40px] w-full'>Order Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebsitePackage