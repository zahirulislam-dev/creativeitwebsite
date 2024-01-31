import React, { useState } from 'react'
import Logo from '../../assets/images/Logo.svg'
import { FaBars } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { FaHome } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }



    return (
        <div className='bg-white py-[20px] fixed lg:top-[59px] md:top-[59px] top-[110px] w-full shadow'>
            <div className='max-w-container mx-auto px-[10px] xl:px-0'>
                <div className='flex justify-between items-center'>
                    <div className='w-[20%]'>
                        <img src={Logo} alt="" />
                    </div>
                    <div className='flex justify-end'>
                        <div onClick={handleClick} className='block md:hidden'>
                            {
                                show == true ? <div className='bg-[#4364F7] p-[8px] rounded'><RxCross2 className="text-white text-2xl" /></div> : <div className='bg-[#4364F7] p-[8px] rounded'><FaBars className="text-white text-2xl" /></div>
                            }
                        </div>
                        <div className='w-[80%]'>
                            <div className={`md:flex justify-end items-center xl:gap-x-[25px] md:gap-x-[8px] md:static w-full absolute top-[-200px] left-0 px-4 md:px-0 z-[999] ${show == true ? 'top-[80px] bg-white w-full py-[20px] md:bg-primary md:py-0' : 'top-[-485px] bg-white py-[20px] md:bg-white md:py-0'}`}>
                                <Link to='/'>
                                    <div className='flex items-center mb-[10px] md:mb-0 cursor-pointer'>
                                        <p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>Home</p>
                                    </div>
                                </Link>
                                <div className='mb-[10px] md:mb-0 cursor-pointer'>
                                    <Link to='/AboutCreativeIt'><p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>About</p></Link>
                                </div>
                                <div className='group relative mb-[10px] md:mb-0 flex justify-between items-center cursor-pointer'>
                                    <p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>Services</p>
                                    <MdKeyboardArrowDown className='text-[#4364F7] text-[25px] lg:ml-[5px]' />

                                    <div className='group-hover:h-[260px] xl:group-hover:h-[275px] hidden group-hover:block transition-all w-[350px] left-[-4] top-[30px] bg-gray-100 shadow-lg absolute rounded-[8px] p-[20px]'>
                                        <Link to='/WebDevelopmentDetails'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:text-[#000000]'>Software Development</p></Link>
                                        <Link to='/WebDesignDevelopmentDetails'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:text-[#000000] mt-[8px]'>Web Design & Development</p></Link>
                                        <Link to='/WebAppDevelopmentDetails'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:text-[#000000] mt-[8px]'>Web App Development</p></Link>
                                        <Link to='/MobileAppDevelopmentDetails'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:text-[#000000] mt-[8px]'>Mobile App Development</p></Link>
                                        <Link to='/DomainRegistrationDetails'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:text-[#000000] mt-[8px]'>Domain Registration</p></Link>
                                        <Link to='/PremiumHostingDetails'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:text-[#000000] mt-[8px]'>Premium Web Hosting</p></Link>
                                        <Link to='/BulkSmsDetails'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:text-[#000000] mt-[8px]'>Bulk SMS</p></Link>
                                    </div>
                                </div>
                                <div className='group relative mb-[10px] md:mb-0 flex justify-between items-center cursor-pointer'>
                                    <p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>Products</p>
                                    <MdKeyboardArrowDown className='text-[#4364F7] text-[25px] lg:ml-[5px]' />
                                    <div className='group-hover:h-[90px] xl:group-hover:h-[100px] hidden  group-hover:block transition-all w-[350px] left-[-4] top-[30px] bg-gray-100 shadow-lg absolute rounded-[8px] p-[20px]'>
                                        <Link to='/ExploreReadyProducts'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:text-[#000000]'>Ready POS Software</p></Link>
                                        <Link to='/WebsitePackageDetails'><p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:text-[#000000] mt-[8px]'>Website Package</p></Link>
                                    </div>
                                </div>
                                {/* <div className='group relative mb-[10px] md:mb-0 flex justify-between items-center cursor-pointer'>
                                    <p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>Clients</p>
                                    <MdKeyboardArrowDown className='text-[#4364F7] text-[25px] lg:ml-[5px]' />
                                    <div className='group-hover:h-[90px] xl:group-hover:h-[100px] hidden  group-hover:block transition-all w-[350px] left-[-4] top-[30px] bg-gray-100 shadow-lg absolute rounded-[8px] p-[20px]'>
                                        <p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:text-[#000000]'>Featured Clients</p>
                                        <p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:text-[#000000] mt-[8px]'>Others Clients</p>
                                    </div>
                                </div> */}
                                <div className='mb-[10px] md:mb-0 cursor-pointer'>
                                    <Link to='/ContactDetails'><p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>Contact</p></Link>
                                </div>
                                <div className='group relative mb-[10px] md:mb-0 flex justify-between items-center cursor-pointer'>
                                    <p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>Language</p>
                                    <MdKeyboardArrowDown className='text-[#4364F7] text-[25px] lg:ml-[5px]' />
                                    <div className='group-hover:h-[90px] xl:group-hover:h-[100px] hidden  group-hover:block transition-all w-[290px] left-[-4] top-[30px] bg-gray-100 shadow-lg absolute rounded-[8px] p-[20px]'>
                                        <p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:text-[#000000]'>English</p>
                                        <p className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:text-[#000000] mt-[8px]'>Bangla</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar