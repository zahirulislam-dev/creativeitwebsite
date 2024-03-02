import React from 'react'
import { IoMdMailUnread } from 'react-icons/io'
import { BsFillPhoneFill } from 'react-icons/bs'
import { FaFacebookF, FaSearchLocation } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { BiSolidLockOpen } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-[#1C1E53] py-[50px] xl:py-[80px]'>
            <div className='max-w-container mx-auto px-[10px] xl:px-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:xl:gap-[20px] xl:gap-[50px]'>
                    <div className='mb-[30px] xl:mb-0'>
                        <h5 className='font-pops font-bold text-[22px] xl:text-[25px] text-[#fff] mb-[25px]'>Contact Address</h5>
                        <div className='flex mb-[15px]'>
                            <IoMdMailUnread className='text-[22px] text-white' />
                            <p className='font-pops font-regular text-[16px] text-[#fff] ml-[10px]'>info@creativeit.com</p>
                        </div>
                        <div className='flex mb-[15px]'>
                            <IoMdMailUnread className='text-[22px] text-white' />
                            <p className='font-pops font-regular text-[16px] text-[#fff] ml-[10px]'>1stcreativeitbd@gmail.com</p>
                        </div>
                        <div className='flex mb-[15px]'>
                            <BsFillPhoneFill className='text-[22px] text-white' />
                            <p className='font-pops font-regular text-[16px] text-[#fff] ml-[10px]'>+88 01999 878 862</p>
                        </div>
                        <div className='flex mb-[15px] align-baseline'>
                            <FaSearchLocation className='text-[35px] text-white' />
                            <p className='font-pops font-regular text-[16px] text-[#fff] ml-[10px]'>
                                Kassaf Shopping Center (5th Floor), Chittagong Road, Narayanganj, Dhaka, Bangladesh.
                            </p>
                        </div>
                        <div className='mb-[34px]'>
                            <div className='flex align-baseline'>
                                <BiSolidLockOpen className='text-[22px] text-white' />
                                <p className='font-pops font-regular text-[16px] text-[#fff] ml-[10px]'>Friday To Saturday</p>
                            </div>
                            <p className='font-pops font-regular text-[16px] text-[#fff] ml-[30px]'>10:00 AM To 10:00 PM</p>
                        </div>
                        <div className='flex items-center xl:mb-[50px]'>
                            {/* FACEBOOK ICON */}
                            <FaFacebookF className='text-[22px] text-white mr-[40px]' />
                            {/* TWITTER ICON */}
                            <BsTwitter className='text-[22px] text-white mr-[40px]' />
                            {/* LINKEDIN ICON */}
                            <FaLinkedinIn className='text-[22px] text-white mr-[40px]' />
                            {/* YOUTUBE ICON */}
                            <IoLogoYoutube className='text-[22px] text-white' />
                        </div>
                    </div>
                    <div className='mb-[30px] xl:mb-0'>
                        <h5 className='font-pops font-bold text-[22px] xl:text-[25px] text-[#fff] mb-[25px]'>About Us</h5>
                        <p className='font-pops font-regular text-[16px] text-[#fff]'>
                            We aim to provide professional quality information technology service all over Bangladesh even any part of the globe. We have been providing information technology service since 2019. Already we have been developed more than 450 websites, customized software, Android App and Web applications. Mostly we are working with business & education institutes. Life is busy we have to make it easy by using technology. We always ensure quality and develop products keeping in mind the needs of the client. We combine the best technology of the time and our experience. Our goal is to be the most trusted software company in the country. We work hard to achieve this.
                        </p>
                    </div>
                    <div className='mb-[30px] xl:mb-0'>
                        <h5 className='font-pops font-bold text-[22px] xl:text-[25px] text-[#fff] mb-[21px]'>Our Services</h5>
                        <div className='leading-10'>
                            <div>
                                <Link to='/WebDevelopmentDetails'><button className='font-pops font-regular text-[16px] text-[#fff]'>Software Development</button></Link>
                            </div>
                            <div>
                                <Link to='/WebDesignDevelopmentDetails'><button className='font-pops font-regular text-[16px] text-[#fff]'>Web Design & Development</button></Link>
                            </div>
                            <div>
                                <Link to='/WebAppDevelopmentDetails'><button className='font-pops font-regular text-[16px] text-[#fff]'>Web App Development</button></Link>
                            </div>
                            <div>
                                <Link to='/MobileAppDevelopmentDetails'><button className='font-pops font-regular text-[16px] text-[#fff]'>Mobile App Development</button></Link>
                            </div>
                            <Link to='/DomainRegistrationDetails'>
                                <div>
                                    <button className='font-pops font-regular text-[16px] text-[#fff]'>Domain Registration</button>
                                </div>
                            </Link>
                            <Link to='/PremiumHostingDetails'>
                                <div>
                                    <button className='font-pops font-regular text-[16px] text-[#fff]'>Premium Web Hosting</button>
                                </div>
                            </Link>
                            <Link to='/BulkSmsDetails'>
                                <div>
                                    <button className='font-pops font-regular text-[16px] text-[#fff]'>Bulk SMS</button>
                                </div>
                            </Link>
                            <div>
                                <button className='font-pops font-regular text-[16px] text-[#fff]'>Digital Marketing</button>
                            </div>

                        </div>
                    </div>
                    <div className=''>
                        <h5 className='font-pops font-bold text-[22px] xl:text-[25px] text-[#fff] mb-[21px]'>Others</h5>
                        <div className='leading-10'>
                            <Link to='/AboutCreativeIt'>
                                <div>
                                    <button className='font-pops font-regular text-[16px] text-[#fff]'>About</button>
                                </div>
                            </Link>
                            <Link to='/ContactDetails'>
                                <div>
                                    <button className='font-pops font-regular text-[16px] text-[#fff]'>Contact</button>
                                </div>
                            </Link>
                            <div>
                                <button className='font-pops font-regular text-[16px] text-[#fff]'>Payment Info</button>
                            </div>
                            <div>
                                <button className='font-pops font-regular text-[16px] text-[#fff]'>Terms & Conditions</button>
                            </div>
                            <div>
                                <button className='font-pops font-regular text-[16px] text-[#fff]'>Privacy Policy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer