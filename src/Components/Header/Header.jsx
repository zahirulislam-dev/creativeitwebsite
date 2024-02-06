import React from 'react'
import { IoMdMailUnread } from 'react-icons/io'
import { BsFillPhoneFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='bg-[#1C1E53] py-[12px] md:py-[16px] fixed w-full z-[9999]'>
      <div className='max-w-container mx-auto text-white px-[10px] xl:px-0'>
        <div className='md:flex md:items-center'>
          <div className='md:w-3/4 md:gap-x-[25px] lg:gap-x-[54px]'>
            <div className='md:flex md:items-center'>
              <div className='flex items-center cursor-pointer'>
                <BsFillPhoneFill className='text-[22px] text-white' />
                <p className='font-pops font-semibold text-white text-[18px] ml-[8px]'>+88 01999 878 862</p>
              </div>
              <div className='md:flex md:items-center md:ml-[20px] lg:ml-[50px] mt-[5px]'>
                <div className='flex items-center'>
                  <IoMdMailUnread className='text-[22px] text-white' />
                  <p className='font-pops font-semibold text-white text-[18px] ml-[8px]'>info@creativeit.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className='md:w-1/4 flex md:justify-end gap-x-[30px] mt-[5px]'>
            {/* FACEBOOK ICON */}
            <a href="https://www.facebook.com/creativeitbdpos"><FaFacebookF className='text-[22px]' /></a>
            {/* TWITTER ICON */}
            <BsTwitter className='text-[22px]' />
            {/* LINKEDIN ICON */}
            <FaLinkedinIn className='text-[22px]' />
            {/* YOUTUBE ICON */}
            <a href="https://www.youtube.com/@creativeitbdpos"><IoLogoYoutube className='text-[22px]' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header